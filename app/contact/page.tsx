import MainLayout from '@/components/layouts/MainLayout';
import TeamSection from '@/components/contact/TeamSection';
import LocationSection from '@/components/contact/LocationSection';

export const metadata = {
  title: 'Contact | PITKER',
  description: 'Contactez PITKER pour vos besoins en recrutement de dirigeants et leadership advisory. Notre équipe d\'experts est à votre écoute pour vous accompagner dans vos projets.',
  openGraph: {
    title: 'Contact | PITKER',
    description: 'Contactez PITKER pour vos besoins en recrutement de dirigeants et leadership advisory. Notre équipe d\'experts est à votre écoute pour vous accompagner dans vos projets.',
  }
};

export default function ContactPage() {
  return (
    <MainLayout>
      <TeamSection />
      <LocationSection />
    </MainLayout>
  );
} 