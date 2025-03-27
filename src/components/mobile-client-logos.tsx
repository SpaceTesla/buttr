'use client';

import Image from 'next/image';
import { InfiniteMovingCards } from './infinite-moving-cards';

export default function MobileClientLogos() {
  return (
    <div className="block w-screen py-6 pb-20 lg:hidden">
      <h3 className="mb-3 text-center text-lg font-bold">Trusted Partners</h3>
      <div className="w-full overflow-hidden">
        <InfiniteMovingCards
          speed="fast"
          direction="right"
          pauseOnHover={false}
          cards={[
            <div
              key="client1"
              className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 shadow-sm"
            >
              <Image
                src="/logos/clients/logo1.png"
                alt="Client"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>,
            <div
              key="client2"
              className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 shadow-sm"
            >
              <Image
                src="/logos/clients/logo2.png"
                alt="Client"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>,
            <div
              key="client3"
              className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 shadow-sm"
            >
              <Image
                src="/logos/clients/logo3.png"
                alt="Client"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>,
            <div
              key="client4"
              className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 shadow-sm"
            >
              <Image
                src="/logos/clients/logo4.png"
                alt="Client"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>,
            <div
              key="client5"
              className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 shadow-sm"
            >
              <Image
                src="/logos/clients/logo5.png"
                alt="Client"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>,
            <div
              key="client6"
              className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 shadow-sm"
            >
              <Image
                src="/logos/clients/logo6.png"
                alt="Client"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>,
          ]}
          className="h-[80px]"
        />
      </div>
    </div>
  );
}
