// components/ProductCard.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  ShoppingCart,
  Leaf,
  Recycle,
  Award,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (product.images?.length ?? 0) - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (product.images?.length ?? 0) - 1 : prev - 1,
    );
  };

  // Get current image or use a placeholder if no images are available
  const currentImage =
    product.images && product.images.length > 0
      ? product.images[currentImageIndex]
      : '/placeholder.svg';

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        <div className={`relative h-80 w-full`}>
          <Image
            src={currentImage}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation arrows - only show if there are multiple images */}
        {product.images && product.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-1 transition-colors hover:bg-buttr-green hover:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-1 transition-colors hover:bg-buttr-green hover:text-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Image indicators */}
        {product.images && product.images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {product.images.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === currentImageIndex
                    ? 'bg-buttr-green'
                    : 'bg-gray-500/50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentImageIndex(index);
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        {!featured && (
          <div className="mb-1 text-sm text-gray-500">{product.category}</div>
        )}
        <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
        {featured && (
          <p className="mb-4 text-sm text-gray-600">{product.description}</p>
        )}
        <div className="mb-4 flex flex-wrap gap-2">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-buttr-green/10 px-2 py-1 text-xs font-medium text-buttr-green"
            >
              {tag === '100% Recycled' && <Recycle className="mr-1 h-3 w-3" />}
              {tag === 'Tree-Free' && <Leaf className="mr-1 h-3 w-3" />}
              {tag === 'FSC Certified' && <Award className="mr-1 h-3 w-3" />}
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="inline-flex items-center rounded-md bg-buttr-green px-3 py-2 font-medium text-white transition-colors hover:bg-buttr-green/90"
            onClick={() => {
              const whatsappNumber = '+919599634566';
              const message = encodeURIComponent(
                `Hi! I am interested in buying ${product.name}`,
              );
              window.open(
                `https://wa.me/${whatsappNumber}?text=${message}`,
                '_blank',
              );
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
