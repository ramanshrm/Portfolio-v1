# Vercel Deployment Files for Raman Sharma Portfolio

## Frontend Files Structure (Copy these to your Vercel project)

### Root Files
```
/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── craco.config.js
├── jsconfig.json
├── components.json
├── public/
│   └── index.html
└── src/
    ├── App.js
    ├── App.css
    ├── index.js
    ├── index.css
    ├── components/
    ├── data/
    ├── hooks/
    └── lib/
```

### Key Configuration Files

**1. package.json** - Dependencies and build scripts
**2. vercel.json** - Vercel configuration (create this)
**3. .env.local** - Environment variables (create this)

### Important Notes for Vercel Deployment

1. **Backend Hosting**: Since Vercel is frontend-focused, you'll need to deploy the backend separately:
   - **Railway** (recommended for FastAPI + MongoDB)
   - **Render** 
   - **DigitalOcean App Platform**
   - **Heroku**

2. **Environment Variable**: Update REACT_APP_BACKEND_URL to point to your deployed backend

3. **Contact Form**: Will only work after backend is deployed and REACT_APP_BACKEND_URL is updated

## Files to Copy (I'll show the contents below)