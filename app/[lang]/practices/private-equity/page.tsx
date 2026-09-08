import { pageMetadata } from '@/lib/page-metadata';
import MainLayout from '@/components/layouts/MainLayout';
import PrivateEquityContent from '@/components/industries/private-equity/PrivateEquityContent';

export default function PrivateEquityPage() {
  return (
    <MainLayout>
      <PrivateEquityContent />
    </MainLayout>
  );
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata("/practices/private-equity", (await params).lang);
}
