import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import dynamique des composants pour améliorer les performances
const Navbar = dynamic(() => import('@/components/Navbar'));
const HeroSection = dynamic(() => import('@/components/HeroSection'));
const PracticesSection = dynamic(() => import('@/components/PracticesSection'));
const GetConnectedSection = dynamic(() => import('@/components/GetConnectedSection'));
const Footer = dynamic(() => import('@/components/Footer'));

// Métadonnées de la page
export const metadata: Metadata = {
  title: 'Pitker | Leadership Advisory & Executive Search',
  description: 'PITKER delivers Leadership Advisory and Executive Search to dynamic organizations.',
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <PracticesSection />
        <GetConnectedSection />
      </div>
      <Footer />
    </main>
  );
}