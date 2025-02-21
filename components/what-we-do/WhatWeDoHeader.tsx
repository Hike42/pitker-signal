// components/WhatWeDoHeader.tsx
import Image from 'next/image';
import React from 'react';

const WhatWeDoHeader: React.FC = () => {
  return (
    <header className="relative w-screen h-96 md:h-[40vh]">
      {/* Image de fond */}
      <Image
        src="/hangar.jpg" // Placez votre image dans le dossier public
        alt="What We Do Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-end justify-center p-4 md:p-8">
        <div className="w-3/4">
          <h1 className="text-pitkerRed font-bold uppercase text-4xl md:text-xl text-start">
            What we do
          </h1>
          <p className="text-white text-base md:text-xl mt-2 mb-24 text-start">
            Founded in 2020, PITKER is an executive search consulting firm based in Paris, serving mainly mid-market companies in healthcare, private equity, and industry.
          </p>
        </div>
      </div>
    </header>
  );
};

export default WhatWeDoHeader;