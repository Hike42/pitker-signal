import { pageMetadata } from '@/lib/page-metadata';
import MainLayout from '@/components/layouts/MainLayout';
import LifeSciencesContent from '@/components/industries/life-sciences/LifeSciencesContent';

export default function LifeSciencesPage() {
  return (
    <MainLayout>
      <LifeSciencesContent />
    </MainLayout>
  );
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata("/practices/life-sciences", (await params).lang);
}
