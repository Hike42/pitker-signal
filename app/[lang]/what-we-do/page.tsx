import { pageMetadata } from '@/lib/page-metadata';
// pages/what-we-do.tsx
import MainLayout from '@/components/layouts/MainLayout';
import { WhatWeDoSection } from '@/components/what-we-do/WhatWeDoSection';
import { KeyStatsSection } from '@/components/what-we-do/KeyStatsSection';

export default function Page() {
  return (
    <MainLayout>
      <WhatWeDoSection />
      <KeyStatsSection />
    </MainLayout>
  );
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata("/what-we-do", (await params).lang);
}
