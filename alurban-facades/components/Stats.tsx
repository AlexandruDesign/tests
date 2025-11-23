import React from 'react';
import { CornerCard } from './ui/CornerCard';

export const Stats: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Built on Precision.<br />
              Proven Through<br />
              Performance.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-gray-600 text-lg leading-relaxed">
              Since 2005, Alurban has been a trusted partner for large-scale construction projects across Europe and beyond—delivering reliable aluminum and PVC systems with technical excellence and long-term value.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <CornerCard className="border-r md:border-r-0 lg:border-r border-gray-200" borderBottom={false}>
            <div className="py-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Years of Expertise</p>
              <h3 className="text-6xl font-black text-black mb-4">20+</h3>
              <p className="text-gray-600 text-sm">Two decades of hands-on experience in façade systems, passive house standards, and precision-built joinery.</p>
            </div>
          </CornerCard>

          <CornerCard className="border-r md:border-r-0 lg:border-r border-gray-200" borderBottom={false}>
            <div className="py-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Projects Delivered</p>
              <h3 className="text-6xl font-black text-black mb-4">400+</h3>
              <p className="text-gray-600 text-sm">Large-scale commercial and residential installations completed on time and within specifications.</p>
            </div>
          </CornerCard>

          <CornerCard borderBottom={false}>
            <div className="py-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Countries Served</p>
              <h3 className="text-6xl font-black text-black mb-4">6+</h3>
              <p className="text-gray-600 text-sm">Trusted by global partners in Iceland, Germany, Israel, Italy, Romania, and more.</p>
            </div>
          </CornerCard>
        </div>
      </div>
    </section>
  );
};