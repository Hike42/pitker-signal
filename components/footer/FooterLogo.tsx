import Image from 'next/image';

export const FooterLogo = () => (
  <div className="relative w-32 h-12 transition-transform hover:scale-105">
    <Image
      src="/footerlogo.png"
      alt="Pitker Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
); 