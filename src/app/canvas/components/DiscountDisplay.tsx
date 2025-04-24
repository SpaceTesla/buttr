'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface DiscountDisplayProps {
  discountCode: string;
}

export default function DiscountDisplay({
  discountCode,
}: DiscountDisplayProps) {
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
      <h2 className="mb-2 text-2xl font-bold text-green-700">
        Your Discount Code
      </h2>
      <div className="mb-4 rounded-md border border-green-300 bg-white px-4 py-3 font-mono text-3xl">
        {discountCode}
      </div>
      <p className="mb-4">
        Use this code during checkout to get 10% off your next purchase!
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild>
          <Link href="/store">Shop Now</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
