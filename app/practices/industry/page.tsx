import MainLayout from '@/components/layouts/MainLayout';
import IndustryContent from '@/components/industries/industry/IndustryContent';
import IndustryContact from '@/components/industries/IndustryContact';
import { getPartnerByMajor } from '@/lib/constants/partners';

export default function IndustryPage() {
  const partner = getPartnerByMajor('Manufacturing Industries');
  
  // Exception pour l'image de Maud
  const partnerWithCorrectImage = partner ? {
    ...partner,
    image: "/team/maud.jpg"
  } : undefined;
  
  return (
    <MainLayout>
      <IndustryContent />
      <IndustryContact partner={partnerWithCorrectImage} />
    </MainLayout>
  );
} 