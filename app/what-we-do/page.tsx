// pages/what-we-do.tsx
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { WhatWeDoSection } from '@/components/what-we-do/WhatWeDoSection';
import { KeyStatsSection } from '@/components/what-we-do/KeyStatsSection';

export const metadata = {
  title: 'What We Do | Pitker',
  description: 'Discover how Pitker can help you with executive search, board services, and leadership assessment.',
};

export default function Page() {
  return (
    <MainLayout>
      <WhatWeDoSection />
      <KeyStatsSection />
    </MainLayout>
  );
}