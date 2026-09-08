import { pageMetadata } from '@/lib/page-metadata';
import MainLayout from '@/components/layouts/MainLayout';
import TeamSection from '@/components/contact/TeamSection';
import LocationSection from '@/components/contact/LocationSection';

export default function ContactPage() {
  return (
    <MainLayout>
      <TeamSection />
      <LocationSection />
    </MainLayout>
  );
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata("/contact", (await params).lang);
}
