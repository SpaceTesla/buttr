'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  cards,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  cards: React.ReactNode[];
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
        containerRef.current.style.setProperty('--animation-axis', 'X');
      } else if (direction === 'right') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
        containerRef.current.style.setProperty('--animation-axis', 'X');
      } else if (direction === 'down') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
        containerRef.current.style.setProperty('--animation-axis', 'Y');
      } else if (direction === 'up') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
        containerRef.current.style.setProperty('--animation-axis', 'Y');
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    // Update the scroller div className
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-0 max-w-7xl overflow-hidden',
        direction === 'left' || direction === 'right'
          ? '[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'
          : '[mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'w-max min-w-full shrink-0 gap-4 py-4',
          direction === 'left' || direction === 'right'
            ? 'flex flex-nowrap'
            : 'flex flex-col',
          start &&
            (direction === 'left' || direction === 'right'
              ? 'animate-scrollX'
              : 'animate-scrollY'),
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {cards.map((card, idx) => (
          <li
            className="relative max-w-full"
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={idx}
          >
            {card}
          </li>
        ))}
      </ul>
    </div>
  );
};
