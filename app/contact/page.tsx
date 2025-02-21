import MainLayout from '@/components/layouts/MainLayout';
import ContactHeader from '@/components/contact/ContactHeader';
import TeamSection from '@/components/contact/TeamSection';
import LocationSection from '@/components/contact/LocationSection';

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactHeader />
      <TeamSection />
      <LocationSection />
    </MainLayout>
  );
} 