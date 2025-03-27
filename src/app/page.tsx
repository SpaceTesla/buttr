import Image from 'next/image';
import Paper from '../../public/paper.png';
import Socials from '@/components/socials';
import Point from '@/components/point';
import Link from 'next/link';
import React from 'react';
import ClientLogos from '@/components/client-logos';
import MobileClientLogos from '@/components/mobile-client-logos';
import Script from 'next/script';

export const metadata = {
  title: 'BUTTR | Sustainable Tree-Free Recycled Papers',
  description:
    '100% Recycled, Tree-Free, Uber-Smooth, FSC Certified Premium Papers for High-Speed Printing and Writing. Eco-friendly paper solutions saving trees, water, and reducing carbon footprint.',
  keywords:
    'sustainable paper, tree-free paper, recycled paper, eco-friendly paper, FSC certified paper',
  openGraph: {
    title: 'BUTTR | Sustainable Tree-Free Recycled Papers',
    description:
      '100% Recycled, Tree-Free, Uber-Smooth, FSC Certified Premium Papers for High-Speed Printing and Writing.',
    url: 'https://buttrpaper.in',
    images: [
      {
        url: '/images/og-img.png',
        width: 1200,
        height: 630,
        alt: 'BUTTR Sustainable Papers',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BUTTR | Sustainable Tree-Free Papers',
    description:
      '100% Recycled, Tree-Free Papers Saving Trees, Water & Carbon Footprint',
    images: ['/images/og-img.png'],
  },
  alternates: {
    canonical: 'https://buttrpaper.in',
  },
};

export default function Home() {
  const paperAfterStyles =
    'after:absolute after:left-[50%] after:top-[50%] after:-z-10 after:h-[90%] after:w-[90%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-buttr-green';

  return (
    <>
      <Script id="product-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BUTTR Sustainable Papers",
            "url": "https://buttrpaper.in",
            "logo": "https://buttrpaper.in/images/logo.png",
            "description": "100% Recycled, Tree-Free, Uber-Smooth, FSC Certified Premium Papers for High-Speed Printing and Writing.",
            "sameAs": [
              "https://facebook.com/buttrpaper",
              "https://instagram.com/buttrpaper",
              "https://linkedin.com/company/buttrpaper"
            ],
            "offers": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "BUTTR Sustainable Paper",
                "description": "100% Recycled, Tree-Free, Eco-friendly Premium Papers"
              }
            }
          }
        `}
      </Script>
      <main className="h-[calc(100vh-5rem)] overflow-x-clip pt-[5rem]">
        <h1 className="sr-only">
          BUTTR Sustainable Papers - 100% Recycled, Tree-Free Papers
        </h1>
        <div className="grid h-full min-h-full lg:grid-cols-9">
          {/* Left column - Benefits */}
          <div className="col-span-3 flex h-full flex-col items-start justify-center gap-8 py-8 pl-4 pr-4 lg:pr-16">
            <Point
              icon={'/gifs/water-saving.gif'}
              heading={'Saving Water'}
              description={
                'With every ream you save 70 litres of water when compared to traditional paper'
              }
              className={'xl:pl-2'}
            />
            <Point
              icon={'/gifs/book.gif'}
              heading={'Saving Trees'}
              description={
                'With every ream you prevent 1 tree from being cut for paper production'
              }
            />
            <Point
              icon={'/gifs/save-the-world.gif'}
              heading={'Saving Earth'}
              description={
                'With every ream you offset 200 Kgs of carbon footprint helping avert global warming'
              }
              className={'xl:pl-2'}
            />
          </div>
          {/* Center column - Paper Image and Tagline */}
          <div className="relative col-span-6 flex flex-col justify-center md:justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 xl:max-h-[40rem] xl:max-w-[40rem]">
            <div className="relative flex h-min w-full items-center justify-center">
              <div
                className={`relative flex max-h-[37.5rem] max-w-[37.5rem] rounded-full xl:max-h-[50rem] xl:max-w-[50rem]`}
              >
                <Image
                  src={Paper}
                  alt="BUTTR 100% Recycled Tree-Free Paper Stack"
                  width={800}
                  height={800}
                  className="object-contain"
                  priority={true}
                />
                <div
                  className={
                    'absolute inset-0 left-[6em] aspect-square max-h-[37.5rem] max-w-[37.5rem] overflow-clip md:left-[8em]'
                  }
                >
                  <div
                    className="relative left-[35%] top-[50%] flex w-fit -rotate-[25deg] flex-col items-center justify-center gap-4 tracking-wider"
                    style={{
                      perspective: '800px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div
                      style={{
                        transform: 'rotateY(25deg) rotateX(10deg)',
                        transformStyle: 'preserve-3d',
                      }}
                      className="flex flex-col items-center gap-4"
                    >
                      <Link
                        href={'/about'}
                        aria-label="Learn more about BUTTR sustainable papers"
                        className={
                          'text-[1em] font-black uppercase transition hover:scale-105 hover:text-buttr-green hover:drop-shadow md:text-[1.25rem]'
                        }
                      >
                        Know More
                      </Link>
                      <Link
                        href={'/store'}
                        aria-label="Shop BUTTR sustainable paper products"
                        className={
                          'text-[1em] font-black uppercase transition hover:scale-105 hover:text-buttr-green hover:drop-shadow md:text-[1.25em]'
                        }
                      >
                        Shop Buttr
                      </Link>
                      <Link
                        href={'/contact'}
                        aria-label="Contact BUTTR sustainable papers"
                        className={
                          'text-[1em] font-black uppercase transition hover:scale-105 hover:text-buttr-green hover:drop-shadow md:text-[1.25em]'
                        }
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ClientLogos /> {/* Shows on desktop */}
          <MobileClientLogos /> {/* Shows on mobile */}
        </div>

        {/* Social Media Icons */}
        <div className="pt-8">
          <Socials />
        </div>
      </main>
    </>
  );
}
