import MainLayout from '@/components/layouts/MainLayout';
import PrivateEquityContent from '@/components/industries/private-equity/PrivateEquityContent';
import IndustryContact from '@/components/industries/IndustryContact';
import { getPartnerByMajor } from '@/lib/constants/partners';

export default function PrivateEquityPage() {
  const partner = getPartnerByMajor('Private Equity');
  
  return (
    <MainLayout>
      <PrivateEquityContent />
      <IndustryContact partner={partner} />
    </MainLayout>
  );
}