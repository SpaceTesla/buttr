'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface PointProps {
  icon: string;
  heading: string;
  description: string;
  className?: string;
}

const Point: React.FC<PointProps> = ({
  icon,
  heading,
  description,
  className,
}) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [firstFrame, setFirstFrame] = useState<string | null>(null);

  useEffect(() => {
    if (icon.endsWith('.gif')) {
      const img = new window.Image();
      img.src = icon;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        setFirstFrame(canvas.toDataURL('image/png'));
      };
    }
  }, [icon]);

  // Separate hover states for icon and component
  const [isIconHovering, setIsIconHovering] = useState(false);
  const [isComponentHovering, setIsComponentHovering] = useState(false);

  // When icon is hovered, make text visible and keep it visible
  useEffect(() => {
    if (isIconHovering) {
      setIsTextVisible(true);
    }
  }, [isIconHovering]);

  return (
    <div
      className={`point flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsComponentHovering(true)}
      onMouseLeave={() => setIsComponentHovering(false)}
    >
      <div
        className="icon flex min-h-16 min-w-16 items-center justify-center text-sm font-bold uppercase"
        onMouseEnter={() => setIsIconHovering(true)}
        onMouseLeave={() => setIsIconHovering(false)}
      >
        <div className="relative">
          {!isComponentHovering && firstFrame ? (
            <Image src={firstFrame} alt={'icon'} width={80} height={80} />
          ) : (
            <Image
              src={icon}
              alt={'icon'}
              width={80}
              height={80}
              priority={!firstFrame}
            />
          )}
        </div>
      </div>
      <div className="lg:overflow-hidden">
        <div
          className={`text-lg font-extrabold lg:transform lg:transition-transform lg:duration-700 ${
            isTextVisible
              ? 'lg:translate-x-0'
              : 'lg:-translate-x-full lg:opacity-0'
          }`}
        >
          {heading}
        </div>
        <div
          className={`description lg:transform lg:transition-transform lg:delay-100 lg:duration-700 ${
            isTextVisible
              ? 'lg:translate-x-0'
              : 'lg:-translate-x-full lg:opacity-0'
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default Point;
