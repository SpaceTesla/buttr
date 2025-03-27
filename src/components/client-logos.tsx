'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { InfiniteMovingCards } from './infinite-moving-cards';

export default function ClientLogos() {
  const [firstFrameHandshake, setFirstFrameHandshake] = useState<string | null>(
    null,
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const iconPath = '/gifs/handshake.gif';
    const img = new window.Image();
    img.src = iconPath;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      setFirstFrameHandshake(canvas.toDataURL('image/png'));
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before collapsing to prevent flickering
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 300);
  };

  return (
    <div
      ref={containerRef}
      className={`group absolute right-8 hidden cursor-pointer flex-col items-center text-center transition-all duration-500 ease-in-out lg:flex ${
        isExpanded ? 'top-[10%] translate-y-1/2' : 'top-1/2 -translate-y-1/2'
      }`}
      title="Hover to see our clients"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon container that plays GIF on hover */}
      <Image
        src={
          isExpanded
            ? '/gifs/handshake.gif'
            : firstFrameHandshake || '/gifs/handshake.gif'
        }
        alt={'handshake icon'}
        width={80}
        height={80}
        priority={!firstFrameHandshake}
        unoptimized
      />

      {/* Trusted By text that turns green on hover */}
      <div
        className={`w-[160px] p-4 text-center text-lg font-extrabold transition-colors duration-300 ${
          isExpanded ? 'text-buttr-green' : ''
        }`}
      >
        Trusted Partners
      </div>

      {/* Client logos container with infinite scroll */}
      <div
        className={`absolute right-0 top-full mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'h-[400px] w-[160px]' : 'h-0 w-0'
        }`}
        onMouseEnter={handleMouseEnter}
      >
        <div className="w-[160px]">
          <InfiniteMovingCards
            speed="fast"
            direction="down"
            pauseOnHover={false}
            cards={[
              <div
                key="client1"
                className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
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
                className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
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
                className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
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
                className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
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
                className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
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
                className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
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
            className="h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
