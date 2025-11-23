import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Precision-Built <br/>
            Aluminum <br/>
            Urban Projects
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            With over 20 years of expertise, Alurban delivers tailored façade solutions for construction professionals who demand performance, durability, and design freedom.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors">
              Our Projects
            </button>
            <button className="border border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
              Contact Us <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};