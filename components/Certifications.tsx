import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Certifications <br/>
              available here
            </h2>
            
            <div className="flex gap-8 mb-8 opacity-70 grayscale">
               {/* Placeholders for logos (Webflow logo from original design simulated with text/icon) */}
               <div className="flex items-center gap-2 font-bold text-xl">
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm-1.5 18h-3v-3h3v3zm0-4.5h-3v-3h3v3zm0-4.5h-3v-3h3v3zm6 9h-3v-3h3v3zm0-4.5h-3v-3h3v3z"/></svg>
                 Partner
               </div>
               <div className="flex items-center gap-2 font-bold text-xl">
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                 Certified
               </div>
            </div>

            <p className="text-gray-600 mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>

            <div className="flex gap-4">
              <button className="border border-black text-black px-6 py-2 font-medium hover:bg-black hover:text-white transition-colors">
                View All
              </button>
              <button className="flex items-center gap-2 text-black px-6 py-2 font-medium hover:text-gray-600 transition-colors">
                Learn More <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right decorative area - Keeping it clean or adding an image if needed */}
          <div className="hidden md:block relative h-64">
             {/* Giant 'A' continued from previous section visually in design, but implemented here locally for this section */}
             <div className="absolute right-0 top-0 text-[300px] font-black text-gray-100 select-none pointer-events-none leading-none -translate-y-1/4 translate-x-1/4">
               A
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};