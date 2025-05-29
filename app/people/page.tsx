import MainLayout from '@/components/layouts/MainLayout';
import PartnersSection from '@/components/people/PartnersSection';
import { metadata } from './metadata';

export { metadata };

export default function Page() {
  return (
    <MainLayout>
      <PartnersSection />
    </MainLayout>
  );
} 