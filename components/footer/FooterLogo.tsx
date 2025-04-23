import Image from 'next/image';
import { memo } from 'react';

const logoStyles = {
  container: "relative w-32 h-12 transition-transform hover:scale-105",
  image: "object-contain"
};

export const FooterLogo = memo(() => (
  <div className={logoStyles.container}>
    <Image
      src="/footerlogo.png"
      alt="Pitker Logo"
      fill
      className={logoStyles.image}
      priority
      sizes="128px"
    />
  </div>
));

FooterLogo.displayName = 'FooterLogo'; 