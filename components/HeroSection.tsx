import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[600px] md:h-[600px] overflow-hidden">
      <Image
        src="/hangar.jpg"
        alt="Industry Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pitkerBlue/90 via-pitkerBlue/80 to-transparent md:via-pitkerBlue/60 md:to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Specialized expertise to position you for future growth
            </h2>
            <p className="text-white/90 text-base md:text-lg">
              Our global industry practices bring sector-specific knowledge, experience and relationships to every client we work with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;