import Image from 'next/image';
import { CheckCircle, Leaf, Recycle, Award, Printer } from 'lucide-react';
import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'About Us | BUTTR Sustainable Papers',
  description:
    '100% Recycled, Tree-Free, Uber-Smooth, FSC Certified, and Premium Quality Papers for High-Speed Printing and Writing.',
};

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-white pt-[5rem]">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0 bg-buttr-green/10"></div>
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About BUTTR</h1>
            <blockquote className="mb-4 italic text-gray-700">
              <p className="text-center text-xl">
                अयं बन्धुरयं नेति गणना लघुचेतसाम् ।
                <br />
                उदारचरितानां तु वसुधैव कुटुम्बकम् ॥
              </p>
              <footer className="mt-2 text-sm">
                — Mahopanishad, Verse 6.72
              </footer>
            </blockquote>
            <p className="mb-6 text-lg text-gray-700">
              "The distinction of 'this person is mine, this one is not' is made
              only by the small-minded. For those of noble character, the entire
              world is one family."
            </p>
            <p className="text-md mb-8 text-gray-600">
              The central idea upholds the value of all life, including that of
              humans, animals, plants and microorganisms, as well as the
              interdependence of these species both within and outside of our
              world.
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

      {/* Award-Winning Events */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Award-Winning Recognition
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
            We're honored to have received recognition at these prestigious
            events for our innovation in sustainability.
          </p>

          <InfiniteMovingCards
            speed="normal"
            direction="left"
            pauseOnHover={true}
            cards={[
              <div
                key="logo1"
                className="flex h-32 w-48 items-center justify-center rounded-lg bg-white p-4 shadow-sm"
              >
                <Image
                  src="/logos/events/logo1.png"
                  alt="Award Event"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>,
              <div
                key="logo2"
                className="flex h-32 w-48 items-center justify-center rounded-lg bg-white p-4 shadow-sm"
              >
                <Image
                  src="/logos/events/logo2.png"
                  alt="Award Event"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>,
              <div
                key="logo3"
                className="flex h-32 w-48 items-center justify-center rounded-lg bg-white p-4 shadow-sm"
              >
                <Image
                  src="/logos/events/logo3.png"
                  alt="Award Event"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>,
              <div
                key="logo4"
                className="flex h-32 w-48 items-center justify-center rounded-lg bg-white p-4 shadow-sm"
              >
                <Image
                  src="/logos/events/logo4.png"
                  alt="Award Event"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>,
              <div
                key="logo5"
                className="flex h-32 w-48 items-center justify-center rounded-lg bg-white p-4 shadow-sm"
              >
                <Image
                  src="/logos/events/logo5.jpg"
                  alt="Award Event"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>,
              // Add more logos as needed
            ]}
            className="py-4"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-gray-700">
              BUTTR was born from a simple observation: while India faces one of
              the world's highest deforestation rates, the paper industry
              continues with business as usual. We saw an opportunity to
              challenge the status quo and create meaningful change.
            </p>
            <p className="mb-4 text-gray-700">
              Our journey began when we noticed the disconnect between
              environmental concerns and market realities. Despite growing
              awareness, sustainable paper options remained scarce, expensive,
              and often inferior in quality. The packaging industry particularly
              struggled to source affordable recycled materials.
            </p>
            <p className="mb-4 text-gray-700">
              Instead of accepting these limitations, we assembled a team of
              experts in paper technology, sustainability, and manufacturing to
              develop something better. After years of research and refinement,
              we created our signature production process.
            </p>
            <p className="text-gray-700">
              Today, BUTTR offers what was once thought impossible:
              premium-quality recycled papers that outperform conventional
              options at competitive prices. Our mission extends beyond
              products. We're creating a new standard for how the paper industry
              can operate responsibly while meeting modern business needs.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg shadow-md md:h-96">
            <Image
              src="/about.jpg"
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
          <h2 className="mb-4 text-center text-3xl font-bold">
            The Problem We're Solving
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-700">
            India has the second highest deforestation rate globally, losing
            over 600,000 hectares of forest cover annually. With 95 trees cut
            every second for paper production, sustainable alternatives are
            urgently needed but rarely available.
          </p>

          <h2 className="mb-12 text-center text-3xl font-bold">
            What Makes BUTTR Different
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-buttr-green/10">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">100% Recycled</h3>
              <p className="text-gray-700">
                Our papers are made from 100% post-consumer waste, diverting
                materials from landfills and reducing demand for virgin
                resources. Unlike competitors who charge premium prices for
                low-grade recycled paper, we offer superior quality at
                affordable rates.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-buttr-green/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Tree-Free</h3>
              <p className="text-gray-700">
                When big manufacturers refuse to offer sustainable papers or
                charge exorbitant prices, we provide a completely tree-free
                alternative. Our papers help preserve forests vital for
                biodiversity and carbon sequestration.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-buttr-green/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">FSC Certified</h3>
              <p className="text-gray-700">
                Our Forest Stewardship Council certification ensures that our
                products meet the highest environmental and social standards,
                with 100% traceability throughout the production process.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-buttr-green/10">
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
                Unlike traditional low-grade recycled papers, we've perfected
                our manufacturing process to create paper with an exceptionally
                smooth surface. This makes BUTTR papers ideal for both writing
                and printing.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-buttr-green/10">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                High-Speed Printing
              </h3>
              <p className="text-gray-700">
                Our papers are precisely cut for high-speed printing and
                compatible with all printers and inks. You'll experience fewer
                jams and superior print quality, making BUTTR the sustainable
                choice for businesses.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-buttr-green/10">
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
              <h3 className="mb-3 text-xl font-semibold">
                Cost-Effective Quality
              </h3>
              <p className="text-gray-700">
                We save our clients 15% on paper procurement costs while
                offering biodegradable, premium-quality products. Our commitment
                to excellence ensures sustainability doesn't mean sacrificing
                performance or paying exorbitant prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Our Sustainable Process
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
          Unlike big paper manufacturers who rarely offer sustainable options,
          we've built our entire process around creating affordable,
          high-quality recycled papers without compromising on performance.
        </p>
        <div className="relative">
          {/* Process timeline */}
          <div className="absolute left-1/2 z-10 hidden h-full w-1 -translate-x-1/2 transform bg-buttr-green/20 md:block"></div>
          <div className="space-y-12">
            {/* Process 1 */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="order-2 md:order-1 md:w-1/2 md:pr-12 md:text-right">
                <h3 className="mb-3 text-xl font-semibold">
                  Collection & Sorting
                </h3>
                <p className="text-gray-700">
                  We collect post consumer textile and paper waste from our
                  network of recycling partners. Each batch is carefully sorted
                  to ensure quality and remove contaminants, diverting materials
                  from landfills.
                </p>
              </div>
              <div className="order-1 my-4 flex justify-center md:order-2 md:my-0 md:w-12">
                <div className="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-buttr-green font-bold text-white">
                  1
                </div>
              </div>
              <div className="hidden md:order-3 md:block md:w-1/2"></div>
            </div>

            {/* Process 2 */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="hidden md:order-1 md:block md:w-1/2"></div>
              <div className="order-1 my-4 flex justify-center md:order-2 md:my-0 md:w-12">
                <div className="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-buttr-green font-bold text-white">
                  2
                </div>
              </div>
              <div className="order-2 md:order-3 md:w-1/2 md:pl-12">
                <h3 className="mb-3 text-xl font-semibold">
                  Pulping & Cleaning
                </h3>
                <p className="text-gray-700">
                  The sorted waste is transformed into pulp using our
                  energy-efficient process. We use eco-friendly cleaning agents
                  to remove inks and adhesives, ensuring a clean base for our
                  premium papers without the high costs typically associated
                  with recycled products.
                </p>
              </div>
            </div>

            {/* Process 3 */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="order-2 md:order-1 md:w-1/2 md:pr-12 md:text-right">
                <h3 className="mb-3 text-xl font-semibold">
                  Refining & Smoothing
                </h3>
                <p className="text-gray-700">
                  Our proprietary refining process creates the ultra-smooth
                  texture that sets us apart from typical low-grade recycled
                  papers. This stage is where we perfect the balance between
                  sustainability and premium quality that was previously
                  unavailable at affordable prices.
                </p>
              </div>
              <div className="order-1 my-4 flex justify-center md:order-2 md:my-0 md:w-12">
                <div className="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-buttr-green font-bold text-white">
                  3
                </div>
              </div>
              <div className="hidden md:order-3 md:block md:w-1/2"></div>
            </div>

            {/* Process 4 */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="hidden md:order-1 md:block md:w-1/2"></div>
              <div className="order-1 my-4 flex justify-center md:order-2 md:my-0 md:w-12">
                <div className="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-buttr-green font-bold text-white">
                  4
                </div>
              </div>
              <div className="order-2 md:order-3 md:w-1/2 md:pl-12">
                <h3 className="mb-3 text-xl font-semibold">
                  Sheet Formation & Precision Cutting
                </h3>
                <p className="text-gray-700">
                  The refined pulp is formed into sheets using our
                  water-efficient technology and precisely cut for high-speed
                  printing. Our drying process uses 40% less energy than
                  conventional methods, further reducing our environmental
                  footprint and production costs.
                </p>
              </div>
            </div>

            {/* Process 5 */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="order-2 md:order-1 md:w-1/2 md:pr-12 md:text-right">
                <h3 className="mb-3 text-xl font-semibold">
                  Quality Control & Delivery
                </h3>
                <p className="text-gray-700">
                  Every batch undergoes rigorous testing to ensure it meets our
                  high standards. We package our products in recycled and
                  biodegradable materials and offer last-mile delivery, saving
                  our clients 15% on paper procurement costs while maintaining
                  100% traceability.
                </p>
              </div>
              <div className="order-1 my-4 flex justify-center md:order-2 md:my-0 md:w-12">
                <div className="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-buttr-green font-bold text-white">
                  5
                </div>
              </div>
              <div className="hidden md:order-3 md:block md:w-1/2"></div>
            </div>
          </div>
        </div>{' '}
      </section>

      {/* Environmental Impact */}
      <section className="bg-buttr-green/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Our Environmental Impact
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg">
            Cigarette butts are the world's most littered single-use plastic,
            containing microplastics that take over 10 years to decompose. These
            waste items pollute water bodies and threaten ecosystems. Through
            our innovative recycling process, we're turning this harmful waste
            into sustainable, valuable products.
          </p>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div
                className="mb-2 text-6xl font-black text-primary"
                style={{
                  backgroundImage: 'url(/textures/tree.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <CountUp end={100000} decimals={0} compact />
              </div>
              <p className="text-gray-700">Trees Saved</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div
                className="mb-2 text-6xl font-black text-primary"
                style={{
                  backgroundImage: 'url(/textures/water.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <CountUp end={7000000} decimals={0} compact />
              </div>
              <p className="text-gray-700">Litres of Water Saved</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div
                className="mb-2 text-6xl font-black text-primary"
                style={{
                  backgroundImage: 'url(/textures/carbon.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <CountUp end={10500000} decimals={1} compact />
              </div>
              <p className="text-gray-700">KGs Carbon Footprint Offset</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold">Join Our Mission</h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg">
          By choosing BUTTR, you're not just buying paper you're joining a
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
    </main>
  );
}
