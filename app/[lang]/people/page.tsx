import { pageMetadata } from '@/lib/page-metadata';
import MainLayout from '@/components/layouts/MainLayout';
import PartnersSection from '@/components/people/PartnersSection';

export default function Page() {
  return (
    <MainLayout>
      <PartnersSection />
    </MainLayout>
  );
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata("/people", (await params).lang);
}
