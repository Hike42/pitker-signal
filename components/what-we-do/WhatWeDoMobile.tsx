// components/WhatWeDoMobile.tsx
import Image from 'next/image';
import React from 'react';

const WhatWeDoMobile: React.FC = () => {
  return (
    <section className="md:hidden">
      {/* Header avec image et texte en overlay */}
      <div className="relative h-[30rem] w-screen">
        <Image
          src="/whatwedo-hero.jpg" // Votre image dans le dossier public
          alt="What We Do Background"
          fill
          className="object-cover"
        />
        {/* Overlay avec dégradé pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <h1 className="text-white text-3xl font-bold">What we do</h1>
          <p className="text-white text-base my-2">
            Founded in 2020, <strong className='text-pitkerRed'>PITKER</strong> is an executive search consulting firm based in Paris, serving mainly mid-market companies in healthcare, private equity, and industry.
          </p>
        </div>
      </div>
      {/* Bandeau swipable pour les statistiques (sans scrollbar visible) */}
      <div className="mt-4 overflow-x-auto hide-scrollbar pb-2">
        <div className="flex space-x-4 px-4">
          <div className="min-w-[200px] bg-white p-4 rounded shadow">
            <p className="text-2xl font-bold text-gray-800">25 years</p>
            <p className="text-sm text-gray-600">of experience</p>
          </div>
          <div className="min-w-[200px] bg-white p-4 rounded shadow">
            <p className="text-2xl font-bold text-gray-800">1/4</p>
            <p className="text-sm text-gray-600">CEO Roles</p>
          </div>
          <div className="min-w-[200px] bg-white p-4 rounded shadow">
            <p className="text-2xl font-bold text-gray-800">2/3</p>
            <p className="text-sm text-gray-600">Mid-Size companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoMobile;