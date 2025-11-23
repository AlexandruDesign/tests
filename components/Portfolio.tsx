import React from 'react';
import { CornerCard } from './ui/CornerCard';
import { ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

const tamplarieItems: PortfolioItem[] = [
  {
    title: "Aluminiu",
    description: "High-performance aluminum joinery for modern architectural demands.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Fibra de sticla",
    description: "Innovative fiberglass solutions offering superior thermal insulation.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Perete cortina",
    description: "Curtain walls designed to maximize natural light and energy efficiency.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=600&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Usi Glisante",
    description: "Sliding door systems that blend indoor comfort with outdoor views.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop",
    link: "#"
  }
];

const insectItems: PortfolioItem[] = [
  {
    title: "Manuale",
    description: "Manual insect screens designed for durability and ease of use in residential settings.",
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Motorizate",
    description: "Automated insect protection systems integrated with smart home technologies.",
    image: "https://images.unsplash.com/photo-1558036117-15db527a5d3b?q=80&w=800&auto=format&fit=crop",
    link: "#"
  }
];

const PortfolioGrid: React.FC<{ items: PortfolioItem[], cols?: number }> = ({ items, cols = 4 }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-8 md:gap-0`}>
    {items.map((item, idx) => (
      <CornerCard key={idx} variant="dark" className="bg-transparent group hover:bg-white/5 transition-colors duration-300">
        <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-800">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{item.description}</p>
        <a href={item.link} className="inline-flex items-center text-white text-xs font-bold tracking-widest uppercase hover:text-gray-300">
          See More <ArrowRight size={14} className="ml-2" />
        </a>
      </CornerCard>
    ))}
  </div>
);

export const Portfolio: React.FC = () => {
  return (
    <section className="bg-brand-black py-20 relative overflow-hidden">
      {/* Background Pattern Hint */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex flex-wrap justify-center content-center select-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="text-[20vw] font-black text-white leading-none whitespace-nowrap">ALURBAN</span>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section 1: Tamplarie */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Portfolio</p>
            <h2 className="text-5xl font-bold text-white">Tamplarie</h2>
          </div>
          <PortfolioGrid items={tamplarieItems} cols={4} />
        </div>

        {/* Section 2: Plase de insecte */}
        <div id="insect-screens">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Portfolio</p>
            <h2 className="text-5xl font-bold text-white">Plase de insecte</h2>
          </div>
          <PortfolioGrid items={insectItems} cols={2} />
        </div>
      </div>
    </section>
  );
};