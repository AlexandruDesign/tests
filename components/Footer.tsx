import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Big Logo */}
        <div className="text-center mb-8">
           <h1 className="text-[12vw] md:text-[15vw] font-black text-gray-300 leading-none tracking-tighter select-none">
             ALURBAN
           </h1>
           <p className="text-lg md:text-xl font-bold tracking-widest mt-4">by PROFILEX DESIGN GROUP</p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Cookies Settings</a>
          </div>
          <div>
            © 2024 Relume. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};