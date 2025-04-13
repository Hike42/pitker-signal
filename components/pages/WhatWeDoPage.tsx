'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WhatWeDoSection } from '@/components/what-we-do/WhatWeDoSection';
import { KeyStatsSection } from '@/components/what-we-do/KeyStatsSection';
import { motion } from 'framer-motion';

export default function WhatWeDoPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <WhatWeDoSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <KeyStatsSection />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
} 