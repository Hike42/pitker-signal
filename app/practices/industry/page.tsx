import MainLayout from '@/components/layouts/MainLayout';
import IndustrialContent from '@/components/industries/industrial/IndustrialContent';
import { metadata } from './metadata';

export { metadata };

export default function IndustryPage() {
  return (
    <MainLayout>
      <IndustrialContent />
    </MainLayout>
  );
} 