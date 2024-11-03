import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./animation.css"
import TopNavigation from '@/components/@shared/TopNavigation';

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "A Portfolio - Barly Djaja",
  description: "Personal portfolio website by Barly Djaja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-6xl mx-auto`}
      >
        <TopNavigation/>
        {children}
      </body>
    </html>
  );
}
