import { notFound } from 'next/navigation';
import { isLanguage } from '@/lib/i18n';
import { Sen } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { AnimatedLanguageWrapper } from '@/components/animation/AnimatedLanguageWrapper';
import { CookieBanner } from '@/components/CookieBanner';
import SchemaOrg from '@/components/SchemaOrg';
import { siteMetadata } from '@/constants/metadata';

const sen = Sen({
  subsets: ["latin"],
  weight: "400",
});

export function generateStaticParams() { return [{ lang: 'fr' }, { lang: 'en' }]; }


export default async function RootLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return (
    <html lang={lang}>
      <head>
        <SchemaOrg type="Organization" data={siteMetadata.organization} />
      </head>
      <body className={`${sen.className} antialiased`}>
        <LanguageProvider language={lang}>
          <AnimatedLanguageWrapper>
            {children}
          </AnimatedLanguageWrapper>
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}