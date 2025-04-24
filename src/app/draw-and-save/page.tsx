'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DrawPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [hasDrawn, setHasDrawn] = useState(false);

  // Setup canvas context on mount
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#000000';
        setContext(ctx);
      }
    }
  }, []);

  // Track time spent on the page
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && context) {
        // Save the current drawing
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvasRef.current.width;
        tempCanvas.height = canvasRef.current.height;
        tempCtx?.drawImage(canvasRef.current, 0, 0);

        // Resize canvas
        canvasRef.current.width = canvasRef.current.offsetWidth;
        canvasRef.current.height = canvasRef.current.offsetHeight;

        // Restore the drawing
        context.drawImage(tempCanvas, 0, 0);

        // Reset context properties (they get reset on resize)
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = 5;
        context.strokeStyle = '#000000';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [context]);

  const startDrawing = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    if (!context) return;

    setIsDrawing(true);
    setHasDrawn(true);

    // For mouse events
    if ('nativeEvent' in e && 'offsetX' in e.nativeEvent) {
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }
    // For touch events
    else if ('touches' in e && e.touches[0]) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        context.beginPath();
        context.moveTo(x, y);
      }
    }
  };

  const draw = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    if (!isDrawing || !context) return;

    // Prevent scrolling when drawing on mobile
    e.preventDefault();

    // For mouse events
    if ('nativeEvent' in e && 'offsetX' in e.nativeEvent) {
      context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      context.stroke();
    }
    // For touch events
    else if ('touches' in e && e.touches[0]) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        context.lineTo(x, y);
        context.stroke();
      }
    }
  };

  const stopDrawing = () => {
    if (context) {
      context.closePath();
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (context && canvasRef.current) {
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );
      setHasDrawn(false);
    }
  };

  const saveDrawing = async () => {
    if (!canvasRef.current || !hasDrawn) return;

    setSaving(true);
    try {
      // Get the canvas data URL
      const imageData = canvasRef.current.toDataURL('image/png');

      // Generate a discount code - in a real app, you'd want to store this in a database
      const response = await fetch('/api/drawing-discount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageData,
          timeSpent,
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
    } finally {
      setSaving(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Draw Something & Get 10% Off
      </h1>

      <div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <p className="mb-4 text-center">
            Express yourself through art! Draw anything you like and get a 10%
            discount code on your next purchase. Be creative - there are no
            rules except to have fun!
          </p>

          <div className="overflow-hidden rounded-md border border-gray-300">
            <canvas
              ref={canvasRef}
              className="h-[400px] w-full cursor-crosshair touch-none bg-white"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            ></canvas>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>Time: {formatTime(timeSpent)}</div>
            <Button variant="outline" onClick={clearCanvas}>
              Clear Canvas
            </Button>
          </div>
        </div>

        {discountCode ? (
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
        ) : (
          <Button
            className="w-full py-6 text-lg"
            onClick={saveDrawing}
            disabled={!hasDrawn || saving}
          >
            {saving ? 'Generating your discount...' : 'Get Your 10% Discount'}
          </Button>
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
