import MainLayout from '@/components/layouts/MainLayout';
import PartnersSection from '@/components/people/PartnersSection';

export const metadata = {
  title: 'Our Team | Pitker',
  description: 'Meet the leadership team at Pitker, bringing expertise in executive search and leadership advisory.',
};

export default function Page() {
  return (
    <MainLayout>
      <PartnersSection />
    </MainLayout>
  );
} 