import MainLayout from '@/components/layouts/MainLayout';
import LifeSciencesContent from '@/components/industries/life-sciences/LifeSciencesContent';
import { metadata } from './metadata';

export { metadata };

export default function LifeSciencesPage() {
  return (
    <MainLayout>
      <LifeSciencesContent />
    </MainLayout>
  );
} 