import React from 'react';
import { Card, CardContent } from './ui/card';
import { education } from '../data/mockData';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24" style={{ backgroundColor: '#1a1a1a' }}>
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
            Education
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
            Academic foundation supporting professional excellence
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={edu.id} className="transition-all duration-300 hover:transform hover:translateY(-2px)" style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid #333333',
              borderRadius: '12px'
            }}>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  {/* Icon & Year */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 lg:flex-col lg:text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{
                        backgroundColor: 'rgba(255, 107, 53, 0.1)',
                        color: '#ff6b35'
                      }}>
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div className="flex items-center gap-2 lg:mt-4">
                        <Calendar className="w-4 h-4" style={{ color: '#ff6b35' }} />
                        <span style={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#ff6b35',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="lg:col-span-3">
                    <div className="space-y-4">
                      {/* Degree */}
                      <div>
                        <h3 style={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontWeight: '700',
                          fontSize: '1.5rem',
                          color: '#ffffff',
                          marginBottom: '0.5rem',
                          lineHeight: '1.3'
                        }}>
                          {edu.degree}
                        </h3>
                        <p style={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontSize: '1.1rem',
                          color: '#cccccc',
                          fontWeight: '500'
                        }}>
                          {edu.institution}
                        </p>
                      </div>
                      
                      {/* Specialization */}
                      {edu.specialization && (
                        <div>
                          <h4 style={{
                            fontFamily: 'Inter, Arial, sans-serif',
                            fontWeight: '600',
                            fontSize: '1rem',
                            color: '#ff6b35',
                            marginBottom: '0.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}>
                            Specialization
                          </h4>
                          <p style={{
                            fontFamily: 'Inter, Arial, sans-serif',
                            fontSize: '1rem',
                            color: '#cccccc',
                            lineHeight: '1.5'
                          }}>
                            {edu.specialization}
                          </p>
                        </div>
                      )}
                      
                      {/* Thesis */}
                      {edu.thesis && (
                        <div>
                          <h4 style={{
                            fontFamily: 'Inter, Arial, sans-serif',
                            fontWeight: '600',
                            fontSize: '1rem',
                            color: '#ff6b35',
                            marginBottom: '0.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}>
                            Thesis
                          </h4>
                          <p style={{
                            fontFamily: 'Inter, Arial, sans-serif',
                            fontSize: '1rem',
                            color: '#cccccc',
                            lineHeight: '1.5',
                            fontStyle: 'italic'
                          }}>
                            "{edu.thesis}"
                          </p>
                        </div>
                      )}
                      
                      {/* Coursework */}
                      {edu.coursework && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-4 h-4" style={{ color: '#ff6b35' }} />
                            <h4 style={{
                              fontFamily: 'Inter, Arial, sans-serif',
                              fontWeight: '600',
                              fontSize: '1rem',
                              color: '#ff6b35',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              Relevant Coursework
                            </h4>
                          </div>
                          <p style={{
                            fontFamily: 'Inter, Arial, sans-serif',
                            fontSize: '1rem',
                            color: '#cccccc',
                            lineHeight: '1.5'
                          }}>
                            {edu.coursework}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;