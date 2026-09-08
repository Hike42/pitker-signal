import { pageMetadata } from '@/lib/page-metadata';
import MainLayout from '@/components/layouts/MainLayout';
import IndustriesGrid from '@/components/industries/IndustriesGrid';

export default function IndustriesPage() {
  return (
    <MainLayout>
      <IndustriesGrid />
    </MainLayout>
  );
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata("/practices", (await params).lang);
}
