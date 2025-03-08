import MainLayout from '@/components/layouts/MainLayout';
import LifeSciencesContent from '@/components/industries/life-sciences/LifeSciencesContent';
import IndustryContact from '@/components/industries/IndustryContact';
import { getPartnerByMajor } from '@/lib/constants/partners';

export default function LifeSciencesPage() {
  const partner = getPartnerByMajor('Life Sciences');
  
  return (
    <MainLayout>
      <LifeSciencesContent />
      <IndustryContact partner={partner} />
    </MainLayout>
  );
} 