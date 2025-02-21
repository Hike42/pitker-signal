// app/layout.tsx
import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({
  subsets: ["latin"],
  weight: "400", // ou préciser ["400", "700"] si besoin
});

export const metadata: Metadata = {
  title: "Pitker",
  description: "Cabinet de Conseil",
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
        {children}
      </body>
    </html>
  );
}