'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

export default function Analytics() {
  // Déterminer l'environnement en fonction de l'URL
  const isProduction = typeof window !== 'undefined' && window.location.hostname === 'pitker.fr';
  
  // Sélectionner l'ID GA4 approprié
  const gaId = isProduction ? 'G-RR0N1ZYPYK' : 'G-FR9MTYBGFC';

  return (
    <>
      <GoogleAnalytics gaId={gaId} />
    </>
  );
} 