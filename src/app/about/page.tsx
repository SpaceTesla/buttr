import Image from 'next/image';
import { CheckCircle, Leaf, Recycle, Award, Printer } from 'lucide-react';

export const metadata = {
  title: 'About Us | BUTTR Sustainable Papers',
  description:
    '100% Recycled, Tree-Free, Uber-Smooth, FSC Certified, and Premium Quality Papers for High-Speed Printing and Writing.',
};

export default function AboutPage() {
  return (
    <div className="h-[calc(100vh-5.5rem)] bg-white pt-[5.5rem]">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0 bg-[#ebf5ec]"></div>
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About BUTTR</h1>
            <p className="mb-8 text-xl font-medium text-gray-700 md:text-2xl">
              100% Recycled, Tree-Free, Uber-Smooth, FSC Certified, and Premium
              Quality Papers for High-Speed Printing and Writing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                100% Recycled
              </span>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm">
                <Leaf className="mr-2 h-4 w-4 text-primary" />
                Tree-Free
              </span>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm">
                <Award className="mr-2 h-4 w-4 text-primary" />
                FSC Certified
              </span>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm">
                <Printer className="mr-2 h-4 w-4 text-primary" />
                High-Speed Printing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-gray-700">
              BUTTR was founded with a simple yet powerful mission: to create
              premium quality paper products that don't harm our planet. We
              believe that sustainability and quality can go hand in hand.
            </p>
            <p className="mb-4 text-gray-700">
              Our journey began when we realized the devastating impact
              traditional paper production has on forests worldwide. We set out
              to create an alternative that would meet the highest standards of
              quality while being completely sustainable.
            </p>
            <p className="text-gray-700">
              Today, BUTTR stands as a leader in sustainable paper solutions,
              offering products that are 100% recycled, tree-free, and FSC
              certified, without compromising on the smooth texture and premium
              quality that our customers expect.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg shadow-md md:h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="BUTTR sustainable paper production"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Makes BUTTR Different
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">100% Recycled</h3>
              <p className="text-gray-700">
                Our papers are made from 100% post-consumer waste, diverting
                materials from landfills and reducing the demand for virgin
                resources. Each sheet of BUTTR paper represents our commitment
                to a circular economy.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Tree-Free</h3>
              <p className="text-gray-700">
                We're proud that no trees are harmed in the making of our paper.
                By using alternative fibers and recycled materials, we help
                preserve forests that are vital for biodiversity and carbon
                sequestration.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">FSC Certified</h3>
              <p className="text-gray-700">
                Our Forest Stewardship Council certification ensures that our
                products meet the highest environmental and social standards.
                This certification reflects our commitment to responsible
                sourcing and production.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
                  <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path>
                  <path d="M4 12h16"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Uber-Smooth</h3>
              <p className="text-gray-700">
                We've perfected our manufacturing process to create paper with
                an exceptionally smooth surface. This makes BUTTR papers ideal
                for both writing and printing, providing a premium experience
                without environmental compromise.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                High-Speed Printing
              </h3>
              <p className="text-gray-700">
                Our papers are engineered to perform flawlessly in all types of
                printers, including high-speed commercial printers. You'll
                experience fewer jams and superior print quality, making BUTTR
                the sustainable choice for businesses.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Premium Quality</h3>
              <p className="text-gray-700">
                We never compromise on quality. BUTTR papers meet or exceed
                industry standards for opacity, brightness, and durability. Our
                commitment to excellence ensures that sustainability doesn't
                mean sacrificing performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Our Sustainable Process
        </h2>
        <div className="relative">
          {/* Process timeline */}
          <div className="absolute left-1/2 -z-10 hidden h-full w-1 -translate-x-1/2 transform bg-buttr-green/20 md:block"></div>
          <div className="space-y-12">
            {/* Process 1 - Left */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="mb-3 text-xl font-semibold">
                  Collection & Sorting
                </h3>
                <p className="text-gray-700">
                  We collect post-consumer waste paper from our network of
                  recycling partners. Each batch is carefully sorted to ensure
                  quality and remove contaminants.
                </p>
              </div>
              <div className="my-4 flex justify-center md:my-0 md:w-12">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                  1
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Process 2 - Right */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="hidden md:block md:w-1/2"></div>
              <div className="my-4 flex justify-center md:my-0 md:w-12">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                  2
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="mb-3 text-xl font-semibold">
                  Pulping & Cleaning
                </h3>
                <p className="text-gray-700">
                  The sorted paper is transformed into pulp using our
                  energy-efficient process. We use eco-friendly cleaning agents
                  to remove inks and adhesives, ensuring a clean base for our
                  premium papers.
                </p>
              </div>
            </div>

            {/* Process 3 - Left */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="mb-3 text-xl font-semibold">
                  Refining & Smoothing
                </h3>
                <p className="text-gray-700">
                  Our proprietary refining process creates the ultra-smooth
                  texture that BUTTR papers are known for. This stage is where
                  we perfect the balance between sustainability and premium
                  quality.
                </p>
              </div>
              <div className="my-4 flex justify-center md:my-0 md:w-12">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                  3
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Process 4 - Right */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="hidden md:block md:w-1/2"></div>
              <div className="my-4 flex justify-center md:my-0 md:w-12">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                  4
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="mb-3 text-xl font-semibold">
                  Sheet Formation & Drying
                </h3>
                <p className="text-gray-700">
                  The refined pulp is formed into sheets using our
                  water-efficient technology. Our drying process uses 40% less
                  energy than conventional methods, further reducing our
                  environmental footprint.
                </p>
              </div>
            </div>

            {/* Process 5 - Left */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="mb-3 text-xl font-semibold">
                  Quality Control & Packaging
                </h3>
                <p className="text-gray-700">
                  Every batch undergoes rigorous testing to ensure it meets our
                  high standards. We package our products in recycled and
                  biodegradable materials, completing our commitment to
                  sustainability from start to finish.
                </p>
              </div>
              <div className="my-4 flex justify-center md:my-0 md:w-12">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                  5
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="bg-buttr-green/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Our Environmental Impact
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg">
            Every ream of BUTTR paper makes a positive difference for our
            planet. Here's the impact we've made so far:
          </p>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-4xl font-bold text-primary">1.2M+</div>
              <p className="text-gray-700">Trees Saved</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-4xl font-bold text-primary">3.5M+</div>
              <p className="text-gray-700">Gallons of Water Conserved</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-4xl font-bold text-primary">850K+</div>
              <p className="text-gray-700">kWh of Energy Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold">Join Our Mission</h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg">
          By choosing BUTTR, you're not just buying paper—you're joining a
          movement toward a more sustainable future. Together, we can transform
          the paper industry and protect our planet for generations to come.
        </p>
        <a
          href="/store"
          className="inline-block rounded-md bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
        >
          Shop Our Products
        </a>
      </section>
    </div>
  );
}
