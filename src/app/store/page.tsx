// src/app/store/page.tsx
import fs from 'fs';
import path from 'path';
import { StoreTabs } from './components/store-tabs';
import Link from 'next/link';
import { ChevronDown, Leaf, Recycle, Award, Paintbrush } from 'lucide-react';

// Get product data from file system
const getProductData = () => {
  try {
    const productsDir = path.join(process.cwd(), 'public/paper');
    const productFolders = fs.readdirSync(productsDir);

    return productFolders.map((folder, index) => {
      const productDir = path.join(productsDir, folder);
      const images = fs
        .readdirSync(productDir)
        .map((image) => `/paper/${folder}/${image}`);

      // Generate product data with images from folders
      return {
        id: (index + 1).toString(),
        name: folder.replace(/[-_]/g, ' '), // Convert folder name to readable name
        category: 'Sustainable Paper',
        price: 12.99 + index * 2, // Example pricing
        images: images,
        tags: ['100% Recycled', 'Tree-Free', 'FSC Certified'],
        description: `Premium quality sustainable ${folder.replace(/[-_]/g, ' ')} paper. Environmentally friendly and perfect for all your needs.`,
      };
    });
  } catch (error) {
    console.error('Error reading product folders:', error);
    return [];
  }
};

const products = getProductData();

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
              sustainable papers and products.
            </p>
          </div>
        </div>
      </section>

      {/* Main Store Section */}
      <section className="container mx-auto px-4 py-12">
        <StoreTabs products={products} />
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
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
          >
            Contact Us
          </Link>
          <Link
            href="/canvas"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-transparent px-8 py-3 font-medium text-primary ring-1 ring-primary transition-all hover:bg-primary hover:text-white"
          >
            <Paintbrush className="h-5 w-5" />
            Draw & Get 10% Off
          </Link>
        </div>
      </section>
    </div>
  );
}
