import React from 'react';
import { Card, CardContent } from './ui/card';
import { workExperience } from '../data/mockData';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24" style={{ backgroundColor: '#1a1a1a' }}>
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
            Experience
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
            25+ Years of Professional Excellence in IT & Project Management
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'rgba(255, 107, 53, 0.3)' }}></div>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={job.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full timeline-dot" style={{
                  backgroundColor: '#ff6b35',
                  transform: 'translateX(-50%)'
                }}></div>
                
                {/* Experience Card */}
                <Card className="ml-16 transition-all duration-300 hover:transform hover:translateY(-2px)" style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #333333',
                  borderRadius: '12px'
                }}>
                  <CardContent className="p-8">
                    {/* Job Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 style={{
                            fontFamily: 'Inter, Arial, sans-serif',
                            fontWeight: '700',
                            fontSize: '1.5rem',
                            color: '#ffffff',
                            marginBottom: '0.5rem'
                          }}>
                            {job.position}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="w-4 h-4" style={{ color: '#cccccc' }} />
                            <span style={{
                              fontFamily: 'Inter, Arial, sans-serif',
                              fontSize: '1.1rem',
                              fontWeight: '600',
                              color: '#cccccc'
                            }}>
                              {job.company}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4" style={{ color: '#ff6b35' }} />
                            <span style={{
                              fontFamily: 'Inter, Arial, sans-serif',
                              fontSize: '0.9rem',
                              color: '#ff6b35',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              {job.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" style={{ color: '#cccccc' }} />
                            <span style={{
                              fontFamily: 'Inter, Arial, sans-serif',
                              fontSize: '0.9rem',
                              color: '#cccccc'
                            }}>
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Responsibilities */}
                    <div>
                      <h4 style={{
                        fontFamily: 'Inter, Arial, sans-serif',
                        fontWeight: '600',
                        fontSize: '1rem',
                        color: '#ff6b35',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#ff6b35' }}></div>
                            <span style={{
                              fontFamily: 'Inter, Arial, sans-serif',
                              fontSize: '1rem',
                              color: '#cccccc',
                              lineHeight: '1.6'
                            }}>
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;