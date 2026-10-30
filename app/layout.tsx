import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vintale — Taste Heritage',
  description: 'Discover the Vintale collection. Artisanal wines, timeless craft, and moments worth sharing.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased text-ink bg-[#f4f1f2] selection:bg-pink selection:text-white">
        {children}
      </body>
    </html>
  );
}

