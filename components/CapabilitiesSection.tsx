// components/CapabilitiesSection.tsx
import Image from 'next/image';
import React from 'react';

const CapabilitiesSection: React.FC = () => {
  return (
    <section className="relative w-screen h-80 md:h-[20rem] overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/capabilities.jpg" // Placez votre image dans le dossier public
        alt="Capabilities Background"
        fill
        className="object-cover"
      />
      {/* Rectangle blanc superposé */}
      <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 md:left-16 md:translate-x-0 w-2/3 md:w-1/2 bg-white p-8">
        <h2 className="text-xl md:text-3xl font-bold text-pitkerBlue md:my-4">Our Capabilities</h2>
        <a href="/industries" className="block hover:opacity-80 transition-opacity">
          <p className="text-sm md:text-lg text-pitkerBlue py-4">
            Pitker covers all functions of an executive team, with strong expertise in the roles of Chairman and CEO.
            Combining rigor, in-depth analysis, and discretion, Pitker offers tailored and effective solutions for its clients,
            both in France and internationally, through a network of partner firms.
          </p>
          <p className="text-sm md:text-base text-pitkerRed font-semibold mt-2 flex items-center">
            Discover our industries
            <span className="ml-2">→</span>
          </p>
        </a>
      </div>
    </section>
  );
};

export default CapabilitiesSection;