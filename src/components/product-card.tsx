// components/ProductCard.tsx
import Image from 'next/image';
import { ShoppingCart, Leaf, Recycle, Award } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        <div className={`relative ${featured ? 'h-64' : 'h-48'} w-full`}>
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        {product.isBestseller && (
          <div className="absolute left-4 top-4 rounded bg-yellow-500 px-2 py-1 text-xs font-bold text-white">
            BESTSELLER
          </div>
        )}
        {product.isNew && (
          <div className="absolute left-4 top-4 rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white">
            NEW
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
          <button className="inline-flex items-center rounded-md bg-buttr-green px-3 py-2 text-black transition-colors hover:bg-buttr-green/90">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Shop on Amazon
          </button>
        </div>
      </div>
    </div>
  );
}
