// components/PracticesSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { BsSearch, BsPeople, BsClipboardData } from 'react-icons/bs';
import { motion } from 'framer-motion';

interface Practice {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
  delay: number;
}

const practices: Practice[] = [
  {
    title: "Executive Search",
    description: "Identifying and attracting top leadership talent for executive positions",
    link: "/what-we-do#executive-search",
    icon: BsSearch,
    delay: 0.2
  },
  {
    title: "Board Services",
    description: "Supporting governance excellence and board composition",
    link: "/what-we-do#board-services",
    icon: BsPeople,
    delay: 0.4
  },
  {
    title: "Leadership Assessment",
    description: "Evaluating and developing leadership potential",
    link: "/what-we-do#leadership-assessment",
    icon: BsClipboardData,
    delay: 0.6
  }
];

export default function PracticesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-light text-pitkerBlue mb-4">Our Practices</h2>
          <div className="w-20 h-1 bg-pitkerRed"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: practice.delay }}
            >
              <Link
                href={practice.link}
                className="group block bg-white rounded-lg p-8 h-full transform hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-pitkerBlue/5 transition-colors">
                    <practice.icon className="w-8 h-8 text-pitkerBlue group-hover:text-pitkerRed transition-colors" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 border-2 border-pitkerRed/20 rounded-full group-hover:scale-110 transition-transform"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-pitkerBlue mb-4 group-hover:text-pitkerRed transition-colors">
                  {practice.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {practice.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}