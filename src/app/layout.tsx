import type { Metadata } from 'next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';
import Design from '@/components/design';
import ChatBot from '@/components/chat-bot';
import Socials from '@/components/socials';
import React from 'react';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.buttrpaper.com'),
  title: 'BUTTR | Sustainable Tree-Free Recycled Papers',
  description:
    '100% Recycled, Tree-Free, Uber-Smooth, FSC Certified Premium Papers for High-Speed Printing and Writing. Eco-friendly paper solutions saving trees, water, and reducing carbon footprint.',
  keywords:
    'sustainable paper, tree-free paper, recycled paper, eco-friendly paper, FSC certified paper, carbon neutral paper, water-saving paper, environmentally friendly stationery, green office supplies, sustainable printing, recycled stationery, premium recycled paper, zero waste paper, sustainable business supplies',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'BUTTR | Sustainable Tree-Free Recycled Papers',
    description:
      '100% Recycled, Tree-Free, Uber-Smooth, FSC Certified Premium Papers for High-Speed Printing and Writing.',
    url: 'https://www.buttrpaper.com',
    siteName: 'BUTTR Sustainable Papers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.buttrpaper.com/images/og-img.png',
        width: 1200,
        height: 630,
        alt: 'BUTTR Sustainable Papers - Eco-friendly paper solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BUTTR | Sustainable Tree-Free Papers',
    description:
      '100% Recycled, Tree-Free Papers Saving Trees, Water & Carbon Footprint',
    images: ['https://www.buttrpaper.com/images/og-img.png'],
    creator: '@buttrpaper',
    site: '@buttrpaper',
  },
  verification: {
    google: 'RoEoHLtjEe41NeggzeILzqHILnfRgnsrhAGARV2LSjQ',
  },
  alternates: {
    canonical: 'https://www.buttrpaper.com',
  },
  authors: [{ name: 'BUTTR Paper', url: 'https://www.buttrpaper.com' }],
  category: 'Sustainable Office Supplies',
  creator: 'BUTTR Paper',
  publisher: 'BUTTR Paper',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'BUTTR Sustainable Papers',
                url: 'https://www.buttrpaper.com',
                logo: 'https://www.buttrpaper.com/logos/logo.svg',
                sameAs: [
                  'https://www.twitter.com/buttrpaper',
                  'https://www.instagram.com/buttrpaper',
                  'https://www.linkedin.com/company/buttrpaper',
                  'https://www.youtube.com/@BUTTRPaper',
                ],
                description:
                  '100% Recycled, Tree-Free, Uber-Smooth, FSC Certified Premium Papers for eco-friendly printing and writing.',
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+91-9999999999',
                  contactType: 'customer service',
                  availableLanguage: ['English'],
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                url: 'https://www.buttrpaper.com',
                name: 'BUTTR Sustainable Papers',
                description:
                  'Premium eco-friendly paper solutions saving trees, water and reducing carbon footprint.',
                potentialAction: {
                  '@type': 'SearchAction',
                  target:
                    'https://www.buttrpaper.com/search?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Nav />
        <Design />
        {children}
        <ChatBot />
        <footer className="mt-auto bg-primary/5">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <Socials />
              </div>
              <div className="flex justify-center space-x-4 p-4 pt-0 text-sm text-gray-600">
                <a
                  href="/docs/Privacy%20Policy.pdf"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                <a
                  href="/docs/Terms%20and%20Conditions.pdf"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </div>
              <div className="pb-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} BUTTR Sustainable Papers. All
                rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
