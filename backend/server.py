from fastapi import FastAPI, APIRouter, HTTPException, UploadFile, File, Request
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import aiofiles
import uuid

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create FastAPI app and router
app = FastAPI()
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Models
class ContactInquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=100)
    message: str = Field(..., min_length=10, max_length=1000)

class ContactResponse(BaseModel):
    success: bool
    message: str
    contact_id: str

class ResumeDownload(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    downloaded_at: datetime = Field(default_factory=datetime.utcnow)
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    referrer: Optional[str] = None

# Email function
def send_email(to_email: str, subject: str, body: str, is_html: bool = False):
    try:
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_pass = os.environ.get('SMTP_PASS')

        if not smtp_user or not smtp_pass:
            logger.warning("SMTP credentials not configured - email not sent")
            return False

        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'html' if is_html else 'plain'))

        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.send_message(msg)
        server.quit()

        logger.info(f"Email sent successfully to {to_email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

# Routes
@api_router.get("/")
async def root():
    return {"message": "Raman Sharma Portfolio API"}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact_data: ContactInquiryCreate, request: Request):
    try:
        client_ip = request.client.host
        user_agent = request.headers.get("user-agent", "")

        contact_id = str(uuid.uuid4())

        # Send notification email to admin
        admin_email = os.environ.get('ADMIN_EMAIL', 'ramanshrm@gmail.com')
        admin_subject = f"New Contact Form Submission from {contact_data.name}"
        admin_body = f"""
        New contact form submission received:

        Name: {contact_data.name}
        Email: {contact_data.email}
        Company: {contact_data.company or 'Not provided'}
        Message: {contact_data.message}

        Submitted at: {datetime.utcnow()}
        IP Address: {client_ip}
        """

        # Send confirmation email to sender
        sender_subject = "Thank you for contacting Raman Sharma"
        sender_body = f"""
        Dear {contact_data.name},

        Thank you for reaching out! I have received your message and will get back to you soon.

        Your message:
        {contact_data.message}

        Best regards,
        Raman Sharma
        """

        send_email(admin_email, admin_subject, admin_body)
        send_email(contact_data.email, sender_subject, sender_body)

        return ContactResponse(
            success=True,
            message="Message sent successfully! I'll get back to you soon.",
            contact_id=contact_id
        )

    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process contact form")

@api_router.get("/resume/download")
async def download_resume(request: Request):
    try:
        client_ip = request.client.host
        user_agent = request.headers.get("user-agent", "")
        referrer = request.headers.get("referer", "")

        download_record = ResumeDownload(
            ip_address=client_ip,
            user_agent=user_agent,
            referrer=referrer
        )
        logger.info(f"Resume download tracked: {download_record.dict()}")

        resume_path = ROOT_DIR / "uploads/resume.pdf"

        # If the resume is not present, return 404 instead of creating a
        # plain-text placeholder (that breaks PDF downloads). Creating a
        # placeholder file was the reason a non-PDF was being served.
        if not resume_path.exists():
            logger.warning(f"Resume not found at {resume_path}")
            raise HTTPException(status_code=404, detail="Resume not found")

        # Serve the real PDF file
        return FileResponse(
            path=resume_path,
            filename="Raman_Sharma_Resume.pdf",
            media_type="application/pdf",
        )

    except Exception as e:
        logger.error(f"Error serving resume: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to download resume")

@api_router.post("/resume/upload")
async def upload_resume(file: UploadFile = File(...)):
    try:
        if not file.filename.lower().endswith(".pdf"):
            raise HTTPException(status_code=400, detail="Only PDF files are allowed")

        resume_path = ROOT_DIR / "uploads/resume.pdf"
        resume_path.parent.mkdir(parents=True, exist_ok=True)

        async with aiofiles.open(resume_path, 'wb') as f:
            content = await file.read()
            await f.write(content)

        # Log details so we can debug failed or empty uploads
        try:
            size = resume_path.stat().st_size
        except Exception:
            size = None
        logger.info(f"Resume uploaded successfully: {file.filename} -> {resume_path} (size={size})")
        return {"success": True, "message": "Resume uploaded successfully"}

    except Exception as e:
        logger.error(f"Error uploading resume: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to upload resume")

# Include router and CORS
app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)