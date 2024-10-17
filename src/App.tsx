import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Certifications from './Certifications';
import Education from './Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Portfolio />
      <Certifications />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
