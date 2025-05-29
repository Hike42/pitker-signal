// app/layout.tsx
import { Sen } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { AnimatedLanguageWrapper } from '@/components/animation/AnimatedLanguageWrapper';
import { CookieBanner } from '@/components/CookieBanner';
import SchemaOrg from '@/components/SchemaOrg';
import { defaultMetadata, siteMetadata } from '@/constants/metadata';

const sen = Sen({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <SchemaOrg type="Organization" data={siteMetadata.organization} />
      </head>
      <body className={`${sen.className} antialiased`}>
        <LanguageProvider>
          <AnimatedLanguageWrapper>
            {children}
          </AnimatedLanguageWrapper>
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}