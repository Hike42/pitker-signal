// components/CapabilitiesSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CapabilitiesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-sm overflow-hidden"
        >
          <div className="flex flex-col md:flex-row min-h-[300px]">
            <div className="prose prose-lg max-w-none flex-1 p-10">
              <p className="text-gray-700 text-xl leading-relaxed text-justify font-light">
                <span className="font-semibold text-pitkerBlue">PITKER</span> couvre l&apos;ensemble des fonctions d&apos;une équipe de direction, avec une expertise marquée sur les fonctions de <span className="font-medium">Présidence</span> et de <span className="font-medium">Direction Générale</span>. En conjuguant exigence, profondeur d&apos;analyse et discrétion, PITKER offre des solutions adaptées et efficaces pour ses clients, en France ainsi qu&apos;à l&apos;étranger, grâce à un réseau de cabinets partenaires.
              </p>
            </div>
            <div className="relative w-full md:w-1/2">
              <Image
                src="/ceosearch.jpg"
                alt="CEO Search"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}