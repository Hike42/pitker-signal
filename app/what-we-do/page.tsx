// pages/what-we-do.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatWeDoSection from '@/components/what-we-do/WhatWeDoSection';
import KeyStatsSection from '@/components/what-we-do/KeyStatsSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main className='bg-pitkerBlue'>
        <WhatWeDoSection />
        <KeyStatsSection />
        <CapabilitiesSection />
      </main>
      <Footer />
    </>
  );
}