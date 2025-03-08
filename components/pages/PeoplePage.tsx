'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/people/PartnersSection';

export default function PeoplePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <PartnersSection />
      </div>
      <Footer />
    </main>
  );
} 