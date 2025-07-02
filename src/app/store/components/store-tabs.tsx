'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { Product } from '@/types/product';

interface StoreTabsProps {
  papers: Product[];
  products: Product[];
}

export function StoreTabs({ papers, products }: StoreTabsProps) {
  const [activeTab, setActiveTab] = useState<'papers' | 'products'>('papers');

  return (
    <>
      {/* Tab Navigation */}
      <div className="mb-8 flex justify-center">
        <div className="flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('papers')}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
              activeTab === 'papers'
                ? 'bg-buttr-green text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Papers
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
              activeTab === 'products'
                ? 'bg-buttr-green text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Krafts
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Our Products & Krafts
        </h2>
        {activeTab === 'papers' && (
          <div>
            {/* <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Sustainable Papers
            </h2> */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {papers.map((paper) => (
                <ProductCard key={paper.id} product={paper} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            {/* <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Product Kits
            </h2> */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={`product-${product.id}`} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
