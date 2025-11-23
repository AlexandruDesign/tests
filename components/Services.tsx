import React from 'react';
import { Box, PenTool, Settings, Wrench, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Consultanta",
    description: "Expert advice tailored to your project's specific needs and technical requirements.",
    icon: Box
  },
  {
    title: "Proiectare",
    description: "Detailed design and planning to ensure structural integrity and aesthetic vision.",
    icon: PenTool
  },
  {
    title: "Productie",
    description: "State-of-the-art manufacturing ensuring precision in every component we build.",
    icon: Settings
  },
  {
    title: "Montaj",
    description: "Professional installation services for seamless integration and lasting performance.",
    icon: Wrench
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-brand-dark py-20 relative overflow-hidden text-white border-t border-white/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Tagline</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Comprehensive<br />
              Façade Services<br />
              Under One Roof
            </h2>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
              <button className="flex items-center gap-2 text-white px-6 py-3 font-semibold hover:text-gray-300 transition-colors">
                Contact Sales <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-1/2">
            <div className="text-gray-400 mb-12 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="mb-4 text-white">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Giant 'A' Watermark */}
      <div className="absolute -bottom-40 left-10 text-[400px] font-black text-white/5 select-none pointer-events-none leading-none">
        A
      </div>
    </section>
  );
};