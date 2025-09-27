import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { personalInfo } from '../data/mockData';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: result.detail || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResume = () => {
    try {
      // const backendUrl = import.meta.env.VITE_BACKEND_URL;
      // const downloadUrl = `${backendUrl}/api/resume/download`;

      const downloadUrl = '/Raman_Sharma_Resume.pdf';
      
      // Create a temporary link element and trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Raman_Sharma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download Started",
        description: "Your resume download has started.",
      });
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast({
        title: "Download Error",
        description: "Failed to download resume. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: personalInfo.address,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: '900',
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            lineHeight: '0.9',
            color: '#ffffff',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#ff6b35' }}></div>
          <p style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '1.2rem',
            color: '#cccccc',
            marginTop: '1rem',
            maxWidth: '600px',
            margin: '1rem auto 0'
          }}>
            Ready to discuss opportunities and drive your next project to success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontWeight: '700',
              fontSize: '1.8rem',
              color: '#ffffff',
              marginBottom: '2rem',
              textTransform: 'uppercase'
            }}>
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    color: '#ff6b35'
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: 'Inter, Arial, sans-serif',
                      fontWeight: '600',
                      fontSize: '1rem',
                      color: '#ff6b35',
                      marginBottom: '0.25rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="transition-colors duration-200 hover:underline"
                        style={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontSize: '1.1rem',
                          color: '#cccccc'
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span style={{
                        fontFamily: 'Inter, Arial, sans-serif',
                        fontSize: '1.1rem',
                        color: '#cccccc'
                      }}>
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <Button
              onClick={() => {
                const confirmed = window.confirm(
                  'Are you sure you want to download the resume?'
                );
                if (confirmed) {
                  downloadResume();
                }
              }}
              className="w-full sm:w-auto"
              style={{
                background: 'transparent',
                color: '#ff6b35',
                border: '1px solid #ff6b35',
                borderRadius: '10rem',
                padding: '1em 2em',
                fontFamily: 'Inter, Arial, sans-serif',
                fontWeight: '600',
                fontSize: '1rem',
                minHeight: '48px',
                textTransform: 'uppercase',
                letterSpacing: '-0.04em',
                transition: 'all 0.3s ease'
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Contact Form */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Card style={{
              backgroundColor: '#1a1a1a',
              border: '1px solid #333333',
              borderRadius: '12px',
              filter: 'blur(2px) brightness(0.7)', // blur + dim it
              pointerEvents: 'none', // prevent interaction
              opacity: 0.6, // make it look disabled
              
            }}>
              <CardContent className="p-8">
                <h3 style={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontWeight: '700',
                  fontSize: '1.8rem',
                  color: '#ffffff',
                  marginBottom: '2rem',
                  textTransform: 'uppercase'
                }}>
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2" style={{
                        fontFamily: 'Inter, Arial, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#ff6b35',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-colors duration-200"
                        style={{
                          backgroundColor: '#0a0a0a',
                          border: '1px solid #333333',
                          color: '#cccccc',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2" style={{
                        fontFamily: 'Inter, Arial, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#ff6b35',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="transition-colors duration-200"
                        style={{
                          backgroundColor: '#0a0a0a',
                          border: '1px solid #333333',
                          color: '#cccccc',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2" style={{
                      fontFamily: 'Inter, Arial, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#ff6b35',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="transition-colors duration-200"
                      style={{
                        backgroundColor: '#0a0a0a',
                        border: '1px solid #333333',
                        color: '#cccccc',
                        borderRadius: '8px'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2" style={{
                      fontFamily: 'Inter, Arial, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#ff6b35',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="transition-colors duration-200 resize-none"
                      style={{
                        backgroundColor: '#0a0a0a',
                        border: '1px solid #333333',
                        color: '#cccccc',
                        borderRadius: '8px'
                      }}
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    style={{
                      background: isSubmitting ? '#cc5428' : '#ff6b35',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10rem',
                      padding: '1em 2em',
                      fontFamily: 'Inter, Arial, sans-serif',
                      fontWeight: '600',
                      fontSize: '1rem',
                      minHeight: '48px',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.04em',
                      transition: 'all 0.3s ease',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            {/* Overlay inside the card */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ff6b35',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  pointerEvents: 'none',
                  textAlign: 'center',
                  backgroundColor: 'rgba(0,0,0,0.4)', // optional dimming
                }}
              >
                Currently Unavailable
              </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;