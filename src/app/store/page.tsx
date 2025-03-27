// src/app/store/page.tsx
import Link from 'next/link';
import { ChevronDown, Leaf, Recycle, Award } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { Product } from '@/types/product';

export const metadata = {
  title: 'Store | BUTTR Sustainable Papers',
  description:
    'Shop our collection of 100% recycled, tree-free, premium quality sustainable papers.',
};

// Sample product data
const products: Product[] = [
  {
    id: '1',
    name: 'BUTTR Premium Writing Paper',
    category: 'Writing Paper',
    price: 12.99,
    image: '/placeholder.svg?height=300&width=300',
    rating: 4.8,
    isNew: false,
    isBestseller: true,
    tags: ['100% Recycled', 'Tree-Free', 'FSC Certified'],
    description:
      'Ultra-smooth premium writing paper, perfect for letters, notes, and creative writing.',
  },
  {
    id: '2',
    name: 'BUTTR Office Copy Paper',
    category: 'Office Paper',
    price: 24.99,
    image: '/placeholder.svg?height=300&width=300',
    rating: 4.7,
    isNew: false,
    isBestseller: true,
    tags: ['100% Recycled', 'Tree-Free', 'FSC Certified'],
    description:
      'High-performance copy paper for everyday printing needs. Works flawlessly in all printers.',
  },
  {
    id: '3',
    name: 'BUTTR Eco Notebooks',
    category: 'Notebooks',
    price: 8.99,
    image: '/placeholder.svg?height=300&width=300',
    rating: 4.9,
    isNew: true,
    isBestseller: false,
    tags: ['100% Recycled', 'Tree-Free', 'FSC Certified'],
    description:
      "Sustainable notebooks with smooth paper that's perfect for writing and sketching.",
  },
];

export default function StorePage() {
  return (
    <div className="bg-white pt-[5rem]">
      {/* Hero Section */}
      <section className="bg-buttr-green/10 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Our Products
            </h1>
            <p className="text-lg text-gray-700">
              Shop our collection of 100% recycled, tree-free, premium quality
              sustainable papers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Store Section */}
      <section className="container mx-auto px-4 py-12">
        {/* Sort Controls */}
        {/*<div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">*/}
        {/*  <div className="text-lg font-medium">*/}
        {/*    All Products*/}
        {/*    <span className="text-base text-gray-500">*/}
        {/*      ({products.length} items)*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*  <div className="flex items-center">*/}
        {/*    <span className="mr-2 text-sm text-gray-600">Sort by:</span>*/}
        {/*    <div className="relative">*/}
        {/*      <select className="appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-primary">*/}
        {/*        <option>Featured</option>*/}
        {/*        <option>Price: Low to High</option>*/}
        {/*        <option>Price: High to Low</option>*/}
        {/*        <option>Newest</option>*/}
        {/*        <option>Best Selling</option>*/}
        {/*      </select>*/}
        {/*      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">*/}
        {/*        <ChevronDown className="h-4 w-4" />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Our Sustainability Commitment
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Every BUTTR product is made with our planet in mind. We're
              committed to creating premium paper products that don't compromise
              on quality or sustainability.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <Recycle className="mr-2 h-6 w-6 text-primary" />
                <span className="font-medium">100% Recycled</span>
              </div>
              <div className="flex items-center">
                <Leaf className="mr-2 h-6 w-6 text-primary" />
                <span className="font-medium">Tree-Free</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 h-6 w-6 text-primary" />
                <span className="font-medium">FSC Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Need Help Finding the Right Paper?
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg">
          Our paper experts are here to help you find the perfect sustainable
          paper solution for your needs.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
