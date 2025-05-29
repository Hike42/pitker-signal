import MainLayout from '@/components/layouts/MainLayout';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import { metadata } from './metadata';

export { metadata };

export default function IndustriesPage() {
  return (
    <MainLayout>
      <IndustriesGrid />
    </MainLayout>
  );
} 