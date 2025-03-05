import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingCart,
  Filter,
  Star,
  ChevronDown,
  Leaf,
  Recycle,
  Award,
} from 'lucide-react';

export const metadata = {
  title: 'Store | BUTTR Sustainable Papers',
  description:
    'Shop our collection of 100% recycled, tree-free, premium quality sustainable papers.',
};

// Product type definition
type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  isNew: boolean;
  isBestseller: boolean;
  tags: string[];
  description: string;
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
  {
    id: '4',
    name: 'BUTTR Presentation Paper',
    category: 'Specialty Paper',
    price: 15.99,
    image: '/placeholder.svg?height=300&width=300',
    rating: 4.6,
    isNew: false,
    isBestseller: false,
    tags: ['100% Recycled', 'Tree-Free', 'FSC Certified'],
    description:
      'Premium heavyweight paper for important presentations and documents.',
  },
  {
    id: '5',
    name: 'BUTTR Kraft Paper',
    category: 'Specialty Paper',
    price: 9.99,
    image: '/placeholder.svg?height=300&width=300',
    rating: 4.5,
    isNew: false,
    isBestseller: false,
    tags: ['100% Recycled', 'Tree-Free', 'FSC Certified'],
    description:
      'Versatile kraft paper for wrapping, crafts, and sustainable packaging.',
  },
  {
    id: '6',
    name: 'BUTTR Eco Envelopes',
    category: 'Envelopes',
    price: 7.99,
    image: '/placeholder.svg?height=300&width=300',
    rating: 4.7,
    isNew: true,
    isBestseller: false,
    tags: ['100% Recycled', 'Tree-Free', 'FSC Certified'],
    description:
      'Sustainable envelopes made from 100% recycled materials. Available in multiple sizes.',
  },
  {
    id: '7',
    name: 'BUTTR Art Paper',
    category: 'Art Supplies',
    price: 18.99,
    image: '/placeholder.svg?height=300&width=300',
    rating: 4.9,
    isNew: true,
    isBestseller: false,
    tags: ['100% Recycled', 'Tree-Free', 'FSC Certified'],
    description:
      'Premium art paper for sketching, drawing, and painting. Acid-free and archival quality.',
  },
  {
    id: '8',
    name: 'BUTTR Cardstock',
    category: 'Specialty Paper',
    price: 14.99,
    image: '/placeholder.svg?height=300&width=300',
    rating: 4.6,
    isNew: false,
    isBestseller: true,
    tags: ['100% Recycled', 'Tree-Free', 'FSC Certified'],
    description:
      'Heavyweight cardstock for business cards, invitations, and craft projects.',
  },
];

// Categories derived from products
const categories = Array.from(
  new Set(products.map((product) => product.category)),
);

export default function StorePage() {
  return (
    <div className="bg-white pt-[5.5rem]">
      {/* Hero Section */}
      <section className="bg-primary/10 py-12">
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

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products
            .filter((product) => product.isBestseller)
            .slice(0, 3)
            .map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative">
                  <div className="relative h-64 w-full">
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
                  <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                  {/*<div className="mb-2 flex items-center">*/}
                  {/*  <div className="flex text-yellow-400">*/}
                  {/*    {[...Array(5)].map((_, i) => (*/}
                  {/*      <Star*/}
                  {/*        key={i}*/}
                  {/*        className="h-4 w-4"*/}
                  {/*        fill={*/}
                  {/*          i < Math.floor(product.rating)*/}
                  {/*            ? 'currentColor'*/}
                  {/*            : 'none'*/}
                  {/*        }*/}
                  {/*      />*/}
                  {/*    ))}*/}
                  {/*  </div>*/}
                  {/*  <span className="ml-2 text-sm text-gray-600">*/}
                  {/*    {product.rating}*/}
                  {/*  </span>*/}
                  {/*</div>*/}
                  <p className="mb-4 text-sm text-gray-600">
                    {product.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tag === '100% Recycled' && (
                          <Recycle className="mr-1 h-3 w-3" />
                        )}
                        {tag === 'Tree-Free' && (
                          <Leaf className="mr-1 h-3 w-3" />
                        )}
                        {tag === 'FSC Certified' && (
                          <Award className="mr-1 h-3 w-3" />
                        )}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    {/*<span className="text-xl font-bold">*/}
                    {/*  ${product.price.toFixed(2)}*/}
                    {/*</span>*/}
                    <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-white transition-colors hover:bg-primary/90">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Shop on Amazon
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Main Store Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Filters Sidebar */}
          <div className="md:w-1/4">
            <div className="sticky top-4 rounded-lg border border-gray-200 bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Filter className="h-5 w-5 text-gray-500" />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="mb-2 font-medium">Categories</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="all-categories"
                      name="category"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="all-categories"
                      className="ml-2 text-sm text-gray-700"
                    >
                      All Categories
                    </label>
                  </div>
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`category-${index}`}
                        name="category"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor={`category-${index}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              {/*<div className="mb-6">*/}
              {/*  <h4 className="mb-2 font-medium">Price Range</h4>*/}
              {/*  <div className="space-y-2">*/}
              {/*    <div className="flex items-center">*/}
              {/*      <input*/}
              {/*        id="price-all"*/}
              {/*        name="price"*/}
              {/*        type="radio"*/}
              {/*        defaultChecked*/}
              {/*        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"*/}
              {/*      />*/}
              {/*      <label*/}
              {/*        htmlFor="price-all"*/}
              {/*        className="ml-2 text-sm text-gray-700"*/}
              {/*      >*/}
              {/*        All Prices*/}
              {/*      </label>*/}
              {/*    </div>*/}
              {/*    <div className="flex items-center">*/}
              {/*      <input*/}
              {/*        id="price-under-10"*/}
              {/*        name="price"*/}
              {/*        type="radio"*/}
              {/*        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"*/}
              {/*      />*/}
              {/*      <label*/}
              {/*        htmlFor="price-under-10"*/}
              {/*        className="ml-2 text-sm text-gray-700"*/}
              {/*      >*/}
              {/*        Under $10*/}
              {/*      </label>*/}
              {/*    </div>*/}
              {/*    <div className="flex items-center">*/}
              {/*      <input*/}
              {/*        id="price-10-20"*/}
              {/*        name="price"*/}
              {/*        type="radio"*/}
              {/*        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"*/}
              {/*      />*/}
              {/*      <label*/}
              {/*        htmlFor="price-10-20"*/}
              {/*        className="ml-2 text-sm text-gray-700"*/}
              {/*      >*/}
              {/*        $10 - $20*/}
              {/*      </label>*/}
              {/*    </div>*/}
              {/*    <div className="flex items-center">*/}
              {/*      <input*/}
              {/*        id="price-over-20"*/}
              {/*        name="price"*/}
              {/*        type="radio"*/}
              {/*        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"*/}
              {/*      />*/}
              {/*      <label*/}
              {/*        htmlFor="price-over-20"*/}
              {/*        className="ml-2 text-sm text-gray-700"*/}
              {/*      >*/}
              {/*        Over $20*/}
              {/*      </label>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/* Features */}
              <div>
                <h4 className="mb-2 font-medium">Features</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="feature-recycled"
                      name="features"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="feature-recycled"
                      className="ml-2 text-sm text-gray-700"
                    >
                      100% Recycled
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="feature-tree-free"
                      name="features"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="feature-tree-free"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Tree-Free
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="feature-fsc"
                      name="features"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="feature-fsc"
                      className="ml-2 text-sm text-gray-700"
                    >
                      FSC Certified
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="feature-new"
                      name="features"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="feature-new"
                      className="ml-2 text-sm text-gray-700"
                    >
                      New Arrivals
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="feature-bestseller"
                      name="features"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="feature-bestseller"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Bestsellers
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4">
            {/* Sort and Filter Controls */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="text-lg font-medium">
                All Products{' '}
                <span className="text-base text-gray-500">
                  ({products.length} items)
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-600">Sort by:</span>
                <div className="relative">
                  <select className="appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-primary">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Selling</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative">
                    <div className="relative h-48 w-full">
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
                    <div className="mb-1 text-sm text-gray-500">
                      {product.category}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {product.name}
                    </h3>
                    {/*<div className="mb-2 flex items-center">*/}
                    {/*  <div className="flex text-yellow-400">*/}
                    {/*    {[...Array(5)].map((_, i) => (*/}
                    {/*      <Star*/}
                    {/*        key={i}*/}
                    {/*        className="h-4 w-4"*/}
                    {/*        fill={*/}
                    {/*          i < Math.floor(product.rating)*/}
                    {/*            ? 'currentColor'*/}
                    {/*            : 'none'*/}
                    {/*        }*/}
                    {/*      />*/}
                    {/*    ))}*/}
                    {/*  </div>*/}
                    {/*  <span className="ml-2 text-sm text-gray-600">*/}
                    {/*    {product.rating}*/}
                    {/*  </span>*/}
                    {/*</div>*/}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                        >
                          {tag === '100% Recycled' && (
                            <Recycle className="mr-1 h-3 w-3" />
                          )}
                          {tag === 'Tree-Free' && (
                            <Leaf className="mr-1 h-3 w-3" />
                          )}
                          {tag === 'FSC Certified' && (
                            <Award className="mr-1 h-3 w-3" />
                          )}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      {/*<span className="text-xl font-bold">*/}
                      {/*  ${product.price.toFixed(2)}*/}
                      {/*</span>*/}
                      <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-white transition-colors hover:bg-primary/90">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Shop on Amazon
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="border-b border-t border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-white"
                >
                  1
                </a>
                <a
                  href="#"
                  className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Next
                </a>
              </nav>
            </div>
          </div>
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
