'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  color: string;
  fullWidth: boolean;
}

const IndustryCard = ({ title, description, image, href, color, fullWidth }: IndustryCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Link 
      href={href}
      className={`group relative h-[400px] overflow-hidden ${fullWidth ? 'md:col-span-full' : ''}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 ${color} opacity-80 transition-opacity duration-300 group-hover:opacity-90`}></div>
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h3 className="text-white text-3xl font-bold mb-4">{title}</h3>
        <p className="text-white/90 text-lg">{description}</p>
        <div className="mt-6 flex items-center text-white group-hover:translate-x-2 transition-transform">
          <span className="mr-2">{t.practices.grid.learnMore}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const IndustriesGrid = () => {
  const { t } = useLanguage();
  
  const practices = [
    {
      title: t.practices.grid.lifesciences.title,
      description: t.practices.grid.lifesciences.description,
      image: "/lifesciences.jpg",
      href: "/practices/life-sciences",
      color: "bg-pitkerBlue",
      fullWidth: false
    },
    {
      title: t.practices.grid.manufacturing.title,
      description: t.practices.grid.manufacturing.description,
      image: "/industry.jpg",
      href: "/practices/industry",
      color: "bg-pitkerRed",
      fullWidth: false
    },
    {
      title: t.practices.grid.privateEquity.title,
      description: t.practices.grid.privateEquity.description,
      image: "/pe.jpg",
      href: "/practices/private-equity",
      color: "bg-gray-800",
      fullWidth: false
    },
    {
      title: t.practices.grid.ceoSearch.title,
      description: t.practices.grid.ceoSearch.description,
      image: "/ceosearch.jpg",
      href: "/practices/ceo-search",
      color: "bg-pitkerBlue",
      fullWidth: true
    }
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesGrid; 