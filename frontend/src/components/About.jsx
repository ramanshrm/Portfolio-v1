import React from 'react';
import { Card, CardContent } from './ui/card';
import { personalInfo, achievements } from '../data/mockData';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Leadership',
      description: 'Proven track record in aligning IT initiatives with business objectives and driving organizational success.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Management',
      description: 'Expert in leading cross-functional teams, mentoring professionals, and fostering collaborative environments.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Process Optimization',
      description: 'Specialized in streamlining operations, reducing costs, and implementing efficient systems and workflows.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Vendor Excellence',
      description: 'Comprehensive experience in vendor management, contract negotiation, and relationship building.'
    }
  ];

  return (
    <section id="about" className="py-24" style={{ backgroundColor: '#0a0a0a' }}>
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
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#ff6b35' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div>
            <h3 style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontWeight: '600',
              fontSize: '1.5rem',
              color: '#ff6b35',
              marginBottom: '1.5rem'
            }}>
              Professional Summary
            </h3>
            <p style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#cccccc',
              marginBottom: '2rem'
            }}>
              {personalInfo.summary}
            </p>
            
            <div className="space-y-4">
              <h4 style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontWeight: '600',
                fontSize: '1.25rem',
                color: '#ff6b35',
                marginBottom: '1rem'
              }}>
                Key Achievements
              </h4>
              <div className="space-y-3">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: '#ff6b35' }}></div>
                    <p style={{
                      fontFamily: 'Inter, Arial, sans-serif',
                      fontSize: '1rem',
                      color: '#cccccc',
                      lineHeight: '1.5'
                    }}>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group transition-all duration-300 hover:transform hover:scale-105" style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333333',
                borderRadius: '12px'
              }}>
                <CardContent className="p-6">
                  <div className="mb-4" style={{ color: '#ff6b35' }}>
                    {highlight.icon}
                  </div>
                  <h4 style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}>
                    {highlight.title}
                  </h4>
                  <p style={{
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '0.9rem',
                    color: '#cccccc',
                    lineHeight: '1.5'
                  }}>
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;