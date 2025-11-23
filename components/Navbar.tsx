import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <a href="#" className="text-2xl font-black tracking-tighter uppercase">ALURBAN</a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#insect-screens" className="hover:text-gray-300 transition-colors">Plase de insecte</a>
          <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 md:hidden flex flex-col p-4 space-y-4 text-white">
          <a href="#insect-screens" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Plase de insecte</a>
          <a href="#services" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#contact" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};