import { pageMetadata } from '@/lib/page-metadata';
import MainLayout from '@/components/layouts/MainLayout';
import IndustrialContent from '@/components/industries/industrial/IndustrialContent';

export default function IndustryPage() {
  return (
    <MainLayout>
      <IndustrialContent />
    </MainLayout>
  );
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata("/practices/industry", (await params).lang);
}
