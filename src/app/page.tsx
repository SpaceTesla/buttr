import Image from 'next/image';
import Paper from '../../public/paper.svg';
import Socials from '@/components/socials';
import Point from '@/components/point';

export default function Home() {
  return (
    <main className="h-screen pt-[88px]">
      <div className="grid h-full min-h-full md:grid-cols-4">
        {/* Left column - Benefits */}
        <div className="col-span-1 flex h-full flex-col items-center justify-center gap-8 py-8 pl-4">
          <Point
            icon={'icon'}
            heading={'Saving Water'}
            description={
              'With every ream you save 70 litres of water when compared to traditional paper'
            }
          />
          <Point
            icon={'icon'}
            heading={'Saving Trees'}
            description={
              'With every ream you prevent 1 tree from being cut for paper production'
            }
          />
          <Point
            icon={'icon'}
            heading={'Saving Earth'}
            description={
              'With every ream you offset 200 Kgs of carbon footprint helping avert global warming'
            }
          />

          {/* Social Media Icons */}
          <div className="pt-8">
            <Socials />
          </div>
        </div>

        {/* Right column - Paper Image and Tagline */}
        <div className="relative col-span-3 ml-8 flex items-center">
          <div className="relative flex h-full w-full">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
              <div className="relative max-h-[600px] max-w-[600px]">
                <Image
                  src={Paper}
                  alt="BUTTR Paper Stack"
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="absolute left-[450px] top-[400px] text-right">
              <h2 className="line-height-0.5 text-5xl font-bold leading-none text-gray-900">
                From Bin
                <br />
                To Pin
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
