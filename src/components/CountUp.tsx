'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number; // in ms
  suffix?: string;
  decimals?: number;
  compact?: boolean;
}

function getCompactValue(end: number, decimals: number) {
  // Find the compact value and its magnitude (K, M, B, etc.)
  if (end >= 1e9) return { value: end / 1e9, magnitude: 'B' };
  if (end >= 1e6) return { value: end / 1e6, magnitude: 'M' };
  if (end >= 1e3) return { value: end / 1e3, magnitude: 'K' };
  return { value: end, magnitude: '' };
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  suffix = '+',
  decimals = 0,
  compact = false,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  function getScrambleRange(end: number, compact: boolean, decimals: number) {
    if (compact) {
      const { value } = getCompactValue(end, decimals);
      const digits = Math.floor(Math.log10(Math.abs(value))) + 1;
      if (digits === 1) {
        return [1, 9];
      } else if (digits === 2) {
        // For values like 10.5M, scramble between 10.0 and 10.9
        const min = Math.floor(value * 10) / 10;
        const max = min + 0.9;
        return [min, max];
      } else {
        // Fallback for larger compact values
        return [0, value * 1.2];
      }
    } else {
      const digits = Math.floor(Math.log10(Math.abs(end))) + 1;
      if (digits === 1) {
        return [0, 9];
      } else if (digits === 2) {
        return [10, 99];
      } else if (digits === 3) {
        return [100, 999];
      } else {
        const nextPower = Math.pow(10, digits) - 1;
        return [0, Math.max(end * 1.2, nextPower)];
      }
    }
  }

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let observer: IntersectionObserver;
    let animationFrame: number;
    let startTimestamp: number | null = null;
    const [minScramble, maxScramble] = getScrambleRange(end, compact, decimals);
    const compactInfo = compact ? getCompactValue(end, decimals) : null;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        // Scramble: show random number in the calculated range
        const scramble = Math.random() * (maxScramble - minScramble) + minScramble;
        setCount(scramble);
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Snap to final value
        if (compact && compactInfo) {
          setCount(compactInfo.value);
        } else {
          setCount(end);
        }
      }
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    };

    observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });
    observer.observe(node);

    return () => {
      if (observer) observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
    // eslint-disable-next-line
  }, [end, duration, hasAnimated, compact, decimals]);

  let formatted = '';
  let displayDecimals = decimals;
  let magnitude = '';
  if (end < 100 && !compact) {
    displayDecimals = 1; // Show 1 decimal for small numbers
  }
  if (compact) {
    const { magnitude: mag } = getCompactValue(end, decimals);
    magnitude = mag;
    formatted = count.toLocaleString(undefined, {
      maximumFractionDigits: displayDecimals,
      minimumFractionDigits: displayDecimals,
    });
  } else {
    formatted = count.toLocaleString(undefined, {
      maximumFractionDigits: displayDecimals,
      minimumFractionDigits: displayDecimals,
    });
  }

  return (
    <div ref={ref}>
      {formatted}
      {compact ? magnitude : suffix}
    </div>
  );
};

export default CountUp;
