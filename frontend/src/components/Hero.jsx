import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again.');
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden" style={{ backgroundColor: '#0a0a0a', paddingTop: '80px' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255, 107, 53, 0.1) 50%, transparent 60%),
                           linear-gradient(-45deg, transparent 40%, rgba(255, 107, 53, 0.1) 50%, transparent 60%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="mb-6" style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: '900',
            fontSize: 'clamp(3rem, 5vw, 5rem)',
            lineHeight: '0.9',
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em'
          }}>
            Senior IT
            <br />
            <span style={{ color: '#ff6b35' }}>Professional</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-6" style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            lineHeight: '1.3',
            color: '#cccccc',
            maxWidth: '600px'
          }}>
            25 Years of Excellence in Project Management & IT Operations
          </div>

          {/* Key Stats */}
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex flex-col">
              <span style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontSize: '2rem',
                fontWeight: '900',
                color: '#ff6b35',
                lineHeight: '1'
              }}>25+</span>
              <span style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontSize: '0.9rem',
                color: '#cccccc',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontSize: '2rem',
                fontWeight: '900',
                color: '#ff6b35',
                lineHeight: '1'
              }}>15+</span>
              <span style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontSize: '0.9rem',
                color: '#cccccc',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Project Management</span>
            </div>
            <div className="flex flex-col">
              <span style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontSize: '2rem',
                fontWeight: '900',
                color: '#ff6b35',
                lineHeight: '1'
              }}>50+</span>
              <span style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontSize: '0.9rem',
                color: '#cccccc',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Projects Delivered</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              className="btn-primary"
              style={{
                background: '#ff6b35',
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
                transition: 'all 0.3s ease'
              }}
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => {
                const confirmed = window.confirm(
                  'Are you sure you want to download the resume?'
                );
                if (confirmed) {
                  downloadResume();
                }
              }}
              variant="outline"
              className="btn-secondary"
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
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;