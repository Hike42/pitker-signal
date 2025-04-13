import MainLayout from '@/components/layouts/MainLayout';
import TeamSection from '@/components/contact/TeamSection';
import LocationSection from '@/components/contact/LocationSection';

export default function ContactPage() {
  return (
    <MainLayout>
      <TeamSection />
      <LocationSection />
    </MainLayout>
  );
} 