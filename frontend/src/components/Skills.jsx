import React from 'react';
import { Card, CardContent } from './ui/card';
import { skills } from '../data/mockData';
import { Code, Briefcase, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: <Code className="w-8 h-8" />,
      skills: skills.technical,
      color: '#ff6b35'
    },
    {
      title: 'Professional Skills',
      icon: <Briefcase className="w-8 h-8" />,
      skills: skills.professional,
      color: '#ff6b35'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-8 h-8" />,
      skills: skills.soft,
      color: '#ff6b35'
    }
  ];

  return (
    <section id="skills" className="py-24" style={{ backgroundColor: '#0a0a0a' }}>
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
            Skills & Expertise
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
            Comprehensive skill set built over 25 years of professional experience
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group transition-all duration-300 hover:transform hover:scale-105" style={{
              backgroundColor: '#1a1a1a',
              border: '1px solid #333333',
              borderRadius: '12px'
            }}>
              <CardContent className="p-8">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    color: category.color
                  }}>
                    {category.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills Grid */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-200" style={{
                        backgroundColor: 'rgba(10, 10, 10, 0.5)',
                        border: '1px solid rgba(51, 51, 51, 0.3)'
                      }}>
                        <span style={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: '#cccccc'
                        }}>
                          {skill}
                        </span>
                        <div className="w-2 h-2 rounded-full transition-colors duration-200" style={{
                          backgroundColor: '#ff6b35'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Highlights */}
        <div className="mt-16">
          <Card className="text-center" style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #333333',
            borderRadius: '12px'
          }}>
            <CardContent className="p-12">
              <h3 style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontWeight: '700',
                fontSize: '1.8rem',
                color: '#ffffff',
                marginBottom: '1.5rem',
                textTransform: 'uppercase'
              }}>
                Professional Strengths
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: '#ff6b35',
                    lineHeight: '1'
                  }}>PMO</div>
                  <p style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '1rem',
                    color: '#cccccc',
                    marginTop: '0.5rem'
                  }}>Project Management Office Operations</p>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: '#ff6b35',
                    lineHeight: '1'
                  }}>MIS</div>
                  <p style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '1rem',
                    color: '#cccccc',
                    marginTop: '0.5rem'
                  }}>Management Information Systems</p>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: '#ff6b35',
                    lineHeight: '1'
                  }}>SOX</div>
                  <p style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '1rem',
                    color: '#cccccc',
                    marginTop: '0.5rem'
                  }}>Governance & Compliance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;