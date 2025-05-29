import MainLayout from '@/components/layouts/MainLayout';
import PrivateEquityContent from '@/components/industries/private-equity/PrivateEquityContent';
import { metadata } from './metadata';

export { metadata };

export default function PrivateEquityPage() {
  return (
    <MainLayout>
      <PrivateEquityContent />
    </MainLayout>
  );
}