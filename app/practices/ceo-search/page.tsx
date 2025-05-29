import MainLayout from '@/components/layouts/MainLayout';
import CeoSearchContent from '@/components/industries/ceo-search/CeoSearchContent';
import CeoSearchContacts from '@/components/industries/ceo-search/CeoSearchContacts';
import { metadata } from './metadata';

export { metadata };

export default function CeoSearchPage() {
  return (
    <MainLayout>
      <CeoSearchContent />
      <CeoSearchContacts />
    </MainLayout>
  );
} 