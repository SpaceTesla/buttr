import React from 'react';

interface PointProps {
  icon: string;
  heading: string;
  description: string;
  className?: string; // Optional className prop
}

const Point: React.FC<PointProps> = ({
  icon,
  heading,
  description,
  className,
}) => {
  return (
    <div
      className={`point flex items-center justify-center gap-2 ${className}`}
    >
      <div className="icon flex h-12 w-12 items-center justify-center bg-black px-2 text-sm font-bold uppercase text-white">
        {icon}
      </div>
      <div>
        <div className="text-lg font-extrabold">{heading}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Point;
