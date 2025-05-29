// pages/what-we-do.tsx
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { WhatWeDoSection } from '@/components/what-we-do/WhatWeDoSection';
import { KeyStatsSection } from '@/components/what-we-do/KeyStatsSection';
import { metadata } from './metadata';

export { metadata };

export default function Page() {
  return (
    <MainLayout>
      <WhatWeDoSection />
      <KeyStatsSection />
    </MainLayout>
  );
}