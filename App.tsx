import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;