'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Paintbrush, Eraser, ChevronDown, Trash2 } from 'lucide-react';

interface DrawingCanvasProps {
  onSave: (imageData: string) => void;
}

export default function DrawingCanvas({ onSave }: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [isEraser, setIsEraser] = useState(false);
  const [lastColor, setLastColor] = useState('#000000');
  const [saving, setSaving] = useState(false);
  const [brushWidth, setBrushWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(20);
  const [showBrushSettings, setShowBrushSettings] = useState(false);
  const [showEraserSettings, setShowEraserSettings] = useState(false);

  // Extended color palette
  const colors = [
    { name: 'Black', value: '#000000' },
    { name: 'Gray', value: '#808080' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Orange', value: '#FFA500' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Green', value: '#00AA00' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Purple', value: '#800080' },
    { name: 'Pink', value: '#FFC0CB' },
  ];

  // Setup canvas context on mount with increased pixel density for better drawing quality
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();

      // Use a higher pixel density (2x) for better drawing quality
      const dpr = window.devicePixelRatio || 2;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Scale all drawing operations by the device pixel ratio
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = brushWidth;
        ctx.strokeStyle = selectedColor;
        setContext(ctx);
      }

      // Set the CSS size to match the actual display size
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    }
  }, []);

  // Update stroke color, width, and drawing mode when settings change
  useEffect(() => {
    if (context) {
      context.lineWidth = isEraser ? eraserWidth : brushWidth;

      if (isEraser) {
        context.globalCompositeOperation = 'destination-out';
        context.strokeStyle = 'rgba(255,255,255,1)';
      } else {
        context.globalCompositeOperation = 'source-over';
        context.strokeStyle = selectedColor;
      }
    }
  }, [selectedColor, brushWidth, eraserWidth, isEraser, context]);

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

        // Get the new dimensions with higher pixel density
        const rect = canvasRef.current.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 2;

        // Resize canvas with higher pixel density
        canvasRef.current.width = rect.width * dpr;
        canvasRef.current.height = rect.height * dpr;

        // Update CSS dimensions
        canvasRef.current.style.width = `${rect.width}px`;
        canvasRef.current.style.height = `${rect.height}px`;

        // Scale context for high DPI
        context.scale(dpr, dpr);

        // Restore the drawing
        context.drawImage(tempCanvas, 0, 0);

        // Reset context properties (they get reset on resize)
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = isEraser ? eraserWidth : brushWidth;

        // Restore eraser or color mode
        if (isEraser) {
          context.globalCompositeOperation = 'destination-out';
          context.strokeStyle = 'rgba(255,255,255,1)';
        } else {
          context.globalCompositeOperation = 'source-over';
          context.strokeStyle = selectedColor;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [context, selectedColor, isEraser, brushWidth, eraserWidth]);

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

  const handleSaveDrawing = async () => {
    if (!canvasRef.current || !hasDrawn) return;

    setSaving(true);
    try {
      // Get the canvas data URL
      const imageData = canvasRef.current.toDataURL('image/png');
      onSave(imageData);
    } catch (error) {
      console.error('Error saving drawing:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      {' '}
      <p className="mb-4 text-center">
        Express yourself through art! Draw anything you like and get a 10%
        discount code on your next purchase. Be creative - there are no rules
        except to have fun!
      </p>
      {/* Drawing Canvas */}
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
      {/* Color Palette and Tools */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-between">
        {/* Color Palette */}
        <div className="flex flex-wrap items-center gap-2">
          {colors.map((color) => (
            <button
              key={color.value}
              className={`h-8 w-8 rounded-full transition-transform ${
                selectedColor === color.value && !isEraser
                  ? 'scale-110 ring-2 ring-offset-2'
                  : 'hover:scale-105'
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => {
                setIsEraser(false);
                setSelectedColor(color.value);
                setLastColor(color.value);
              }}
              aria-label={`Select ${color.name} color`}
              title={color.name}
            />
          ))}
        </div>{' '}
        {/* Tools (Brush Settings, Eraser, Eraser Settings, Clear) */}
        <div className="flex items-center gap-2">
          {/* Brush Settings */}
          <div className="relative">
            <button
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 bg-white transition-transform ${
                showBrushSettings
                  ? 'scale-110 ring-2 ring-offset-2'
                  : 'hover:scale-105'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setShowBrushSettings(!showBrushSettings);
                setShowEraserSettings(false);
                setIsEraser(false);
                setSelectedColor(lastColor);
              }}
              aria-label="Brush settings"
              title="Brush Settings"
            >
              {' '}
              <Paintbrush size={16} />
            </button>

            {/* Brush Size Popover */}
            {showBrushSettings && (
              <div
                className="absolute right-0 top-10 z-10 w-48 rounded-md border border-gray-300 bg-white p-3 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-1">
                  <label htmlFor="brushSize" className="text-sm font-medium">
                    Brush Size: {brushWidth}px
                  </label>
                </div>
                <input
                  id="brushSize"
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={brushWidth}
                  onChange={(e) => setBrushWidth(parseInt(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                />
                {/* Preview circles showing brush sizes */}
                <div className="mt-2 flex justify-between">
                  {[1, 10, 20, 30].map((size) => (
                    <div key={size} className="flex flex-col items-center">
                      <div
                        className="rounded-full bg-black"
                        style={{
                          width: `${Math.min(size, 24)}px`,
                          height: `${Math.min(size, 24)}px`,
                        }}
                      ></div>
                      <span className="mt-1 text-xs">{size}px</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>{' '}
          {/* Combined Eraser and Settings Button */}
          <div className="relative">
            <button
              className={`flex h-8 w-10 items-center justify-center rounded-full border border-gray-400 bg-white transition-transform ${
                isEraser ? 'scale-110 ring-2 ring-offset-2' : 'hover:scale-105'
              }`}
              onClick={(e) => {
                e.stopPropagation();

                // Toggle eraser state
                if (!isEraser) {
                  setLastColor(selectedColor);
                  setIsEraser(true);
                } else {
                  // If already using eraser, toggle settings
                  setShowEraserSettings(!showEraserSettings);
                }

                setShowBrushSettings(false);
              }}
              aria-label="Eraser tool and settings"
              title="Eraser"
            >
              {' '}
              <div className="flex items-center">
                <Eraser size={16} className="mr-1" />
                <ChevronDown size={10} />
              </div>
            </button>

            {/* Eraser Size Popover */}
            {showEraserSettings && (
              <div
                className="absolute right-0 top-10 z-10 w-48 rounded-md border border-gray-300 bg-white p-3 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-1">
                  <label htmlFor="eraserSize" className="text-sm font-medium">
                    Eraser Size: {eraserWidth}px
                  </label>
                </div>
                <input
                  id="eraserSize"
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={eraserWidth}
                  onChange={(e) => setEraserWidth(parseInt(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                />
                {/* Preview circles showing eraser sizes */}
                <div className="mt-2 flex justify-between">
                  {[5, 20, 35, 50].map((size) => (
                    <div key={size} className="flex flex-col items-center">
                      <div
                        className="rounded-full border border-gray-400"
                        style={{
                          width: `${Math.min(size / 2, 24)}px`,
                          height: `${Math.min(size / 2, 24)}px`,
                        }}
                      ></div>
                      <span className="mt-1 text-xs">{size}px</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>{' '}
          {/* Clear Canvas */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 bg-white transition-transform hover:scale-105"
            onClick={() => {
              clearCanvas();
              setShowBrushSettings(false);
              setShowEraserSettings(false);
            }}
            aria-label="Clear canvas"
            title="Clear Canvas"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      {/* Submit Button */}
      <Button
        className="mt-6 w-full py-6 text-lg"
        onClick={handleSaveDrawing}
        disabled={!hasDrawn || saving}
      >
        {saving ? 'Generating your discount...' : 'Get Your 10% Discount'}
      </Button>
    </div>
  );
}
