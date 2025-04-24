'use client';

import React, { useState, useEffect } from 'react';
import DrawingCanvas from './components/DrawingCanvas';
import DiscountDisplay from './components/DiscountDisplay';

export default function CanvasPage() {
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const handleSaveDrawing = async (imageData: string) => {
    try {
      // Generate a discount code - in a real app, you'd want to store this in a database
      const response = await fetch('/api/drawing-discount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setDiscountCode(data.discountCode);
      } else {
        console.error('Error saving drawing:', data.error);
      }
    } catch (error) {
      console.error('Error saving drawing:', error);
    }
  };

  return (
    <div className="container mx-auto min-h-screen py-8 pt-[5rem]">
      <h1 className="mb-6 pt-4 text-center text-3xl font-bold">
        Draw Something & Get 10% Off
      </h1>

      <div className="mx-auto max-w-3xl space-y-6">
        {' '}
        {discountCode ? (
          <DiscountDisplay discountCode={discountCode} />
        ) : (
          <DrawingCanvas onSave={handleSaveDrawing} />
        )}
        <div className="text-center text-sm text-gray-500">
          <p>
            We collect drawing submissions to improve our website. Your drawings
            may be used for promotional purposes. By submitting a drawing, you
            agree to our terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
