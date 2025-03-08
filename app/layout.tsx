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
  title: "Pitker - Executive Search Consulting",
  description: "Pitker is an executive search consulting firm based in Paris, serving mainly mid-market companies in healthcare, private equity, and industry.",
  icons: {
    icon: "/favicon.svg",
  },
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