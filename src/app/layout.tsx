import type { Metadata } from 'next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';
import Design from '@/components/design';
import ChatBot from '@/components/chat-bot';
import Socials from '@/components/socials';
import React from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Buttr Paper | Premium Quality Paper Products',
  description:
    'Discover high-quality paper products at Buttr Paper. Eco-friendly notebooks, stationery, and office supplies crafted for comfort and functionality.',
  keywords:
    'buttr paper, paper products, notebooks, stationery, eco-friendly paper',
  robots: 'index, follow',
  openGraph: {
    title: 'Buttr Paper | Premium Quality Paper Products',
    description:
      'Discover high-quality paper products at Buttr Paper. Eco-friendly notebooks, stationery, and office supplies.',
    url: 'https://buttrpaper.in',
    siteName: 'Buttr Paper',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://buttrpaper.in/og-image.jpg', // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: 'Buttr Paper - Premium Stationery Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buttr Paper | Premium Quality Paper Products',
    description:
      'Eco-friendly notebooks, stationery, and office supplies crafted for comfort and functionality.',
    images: ['https://buttrpaper.in/og-image.jpg'], // Replace with your actual image path
  },
  verification: {
    google: 'RoEoHLtjEe41NeggzeILzqHILnfRgnsrhAGARV2LSjQ',
  },
  alternates: {
    canonical: 'https://buttrpaper.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Nav />
        <Design />
        {children}
        <ChatBot />
        <footer className="mt-auto bg-primary/5 p-4">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <Socials />
              </div>
              <div className="flex justify-center space-x-6 p-4 text-sm text-gray-600">
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
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
