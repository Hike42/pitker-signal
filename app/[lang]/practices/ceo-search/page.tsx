import { pageMetadata } from '@/lib/page-metadata';
import MainLayout from '@/components/layouts/MainLayout';
import CeoSearchContent from '@/components/industries/ceo-search/CeoSearchContent';
import CeoSearchContacts from '@/components/industries/ceo-search/CeoSearchContacts';

export default function CeoSearchPage() {
  return (
    <MainLayout>
      <CeoSearchContent />
      <CeoSearchContacts />
    </MainLayout>
  );
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata("/practices/ceo-search", (await params).lang);
}
