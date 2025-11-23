import React from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Info Side */}
          <div className="lg:w-1/2">
            <p className="text-sm font-bold uppercase tracking-widest mb-2">Tagline</p>
            <h2 className="text-5xl font-bold text-black mb-4">Contact us</h2>
            <p className="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Email</h4>
                  <p className="text-gray-600 text-sm mb-1">Lorem ipsum dolor sit amet.</p>
                  <a href="mailto:email@example.com" className="text-black underline font-medium">email@example.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Phone</h4>
                  <p className="text-gray-600 text-sm mb-1">Lorem ipsum dolor sit amet.</p>
                  <a href="tel:+15550000000" className="text-black underline font-medium">+1 (555) 000-0000</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Office</h4>
                  <p className="text-gray-600 text-sm mb-2">123 Sample St, Sydney NSW 2000 AU</p>
                  <a href="#" className="flex items-center text-black font-medium text-sm hover:opacity-70">
                    Get Directions <ChevronRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2">
            <div className="h-full min-h-[400px] w-full bg-gray-100 relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                 alt="Alurban Office" 
                 className="w-full h-full object-cover"
               />
               {/* Overlay grid lines for effect */}
               <div className="absolute inset-0 border border-white/20 m-4"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};