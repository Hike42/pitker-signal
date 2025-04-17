import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { PracticesSection } from '@/components/home/PracticesSection';
import { GetConnectedSection } from '@/components/home/GetConnectedSection';

export const metadata = {
  title: 'Pitker | Leadership Advisory & Executive Search',
  description: 'PITKER delivers Leadership Advisory and Executive Search to dynamic organizations.',
};

export default function Page() {
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