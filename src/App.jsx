import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-darkbg font-sans selection:bg-neon selection:text-darkbg">
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
