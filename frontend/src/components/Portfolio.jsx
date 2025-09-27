import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
 
const Portfolio = () => {
 return (
   <div className="min-h-screen" style={{ backgroundColor: '#1a1c1b' }}>
     <Header />
     <Hero />
     <About />
     <Experience />
     <Skills />
     <Education />
     <Contact />
     <Footer />
   </div>
 );
};
 
export default Portfolio;