'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PARTNERS } from '@/lib/constants/partners';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin: string;
  imagePosition: string;
  major: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, email, linkedin, imagePosition, major }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative"
  >
    <div className="relative aspect-[4/5] overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        style={{ objectPosition: imagePosition }}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        quality={75}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-light text-white mb-2">{name}</h3>
        <p className="text-sm md:text-base text-white/80 font-light tracking-wide mb-1">{role}</p>
        <p className="text-sm md:text-base text-pitkerRed font-light tracking-wide mb-4 md:mb-6">{major}</p>
        <div className="flex space-x-6">
          <Link
            href={`mailto:${email}`}
            className="text-white/80 hover:text-pitkerRed transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </Link>
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-pitkerRed transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

const TeamSection: React.FC = () => {
  const teamMembers = PARTNERS.map(partner => ({
    ...partner
  }));

  return (
    <section id="contacts-section" className="py-8 md:py-16 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-16 lg:mb-24">
            <div className="flex items-center">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-pitkerBlue">
                Contact <span className="text-pitkerRed">us</span>
              </h2>
              <div className="flex items-center ml-3 md:ml-4">
                <div className="h-px w-8 md:w-12 bg-pitkerRed mr-2 md:mr-3"></div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-pitkerRed flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-pitkerRed rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection; 