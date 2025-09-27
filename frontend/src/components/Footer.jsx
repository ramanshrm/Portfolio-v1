import React from 'react';
import { personalInfo } from '../data/mockData';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontWeight: '900',
              fontSize: '1.8rem',
              color: '#ff6b35',
              marginBottom: '1rem'
            }}>
              Raman Sharma
            </h3>
            <p style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '1rem',
              color: '#cccccc',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Senior IT Professional with 25+ years of experience in Project Management, Operations, and Strategic IT Leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontWeight: '700',
              fontSize: '1.2rem',
              color: '#ffffff',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Experience', id: 'experience' },
                { label: 'Skills', id: 'skills' },
                { label: 'Education', id: 'education' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block transition-colors duration-200 hover:underline"
                  style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '1rem',
                    color: '#cccccc',
                    background: 'none',
                    border: 'none',
                    padding: '0.25rem 0',
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontWeight: '700',
              fontSize: '1.2rem',
              color: '#ffffff',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" style={{ color: '#ff6b35' }} />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="transition-colors duration-200 hover:underline"
                  style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '1rem',
                    color: '#cccccc'
                  }}
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" style={{ color: '#ff6b35' }} />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="transition-colors duration-200 hover:underline"
                  style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '1rem',
                    color: '#cccccc'
                  }}
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1" style={{ color: '#ff6b35' }} />
                <span style={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontSize: '1rem',
                  color: '#cccccc',
                  lineHeight: '1.5'
                }}>
                  {personalInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ backgroundColor: '#333333' }}></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '0.9rem',
            color: '#cccccc'
          }}>
            © {currentYear} Raman Sharma. All rights reserved.
          </p>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 transition-all duration-300 hover:transform hover:translateY(-1px)"
            style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '0.9rem',
              color: '#ff6b35',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;