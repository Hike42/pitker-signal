// app/layout.tsx
import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { AnimatedLanguageWrapper } from '@/components/animation/AnimatedLanguageWrapper';

const sen = Sen({
  subsets: ["latin"],
  weight: "400", // ou préciser ["400", "700"] si besoin
});

export const metadata: Metadata = {
  title: "PITKER | Executive Search",
  description: "Pitker is an executive search consulting firm based in Paris, serving mainly mid-market companies in healthcare, private equity, and industry.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PITKER | Executive Search",
    description: "Pitker is an executive search consulting firm based in Paris, serving mainly mid-market companies in healthcare, private equity, and industry.",
    images: [
      {
        url: "/navbarlogo.png",
        width: 1200,
        height: 630,
        alt: "PITKER Logo",
      },
    ],
    type: "website",
    locale: "fr_FR",
    siteName: "PITKER",
  },
  twitter: {
    card: "summary_large_image",
    title: "PITKER | Executive Search",
    description: "Pitker is an executive search consulting firm based in Paris, serving mainly mid-market companies in healthcare, private equity, and industry.",
    images: ["/navbarlogo.png"],
    creator: "@pitker",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${sen.className} antialiased`}>
        <LanguageProvider>
          <AnimatedLanguageWrapper>
            {children}
          </AnimatedLanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}