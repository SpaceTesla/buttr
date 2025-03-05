import Image from 'next/image';
import Paper from '../../public/paper.svg';
import Socials from '@/components/socials';
import Point from '@/components/point';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-[calc(100vh-5.5rem)] overflow-x-clip pt-[5.5rem]">
      <div className="grid h-full min-h-full lg:grid-cols-9">
        {/* Left column - Benefits */}
        <div className="col-span-3 flex h-full flex-col items-start justify-center gap-8 py-8 pl-4 pr-4">
          <Point
            icon={'/gifs/water-saving.gif'}
            heading={'Saving Water'}
            description={
              'With every ream you save 70 litres of water when compared to traditional paper'
            }
            // className={'pl-[1vw]'}
          />
          <Point
            icon={'/gifs/book.gif'}
            heading={'Saving Trees'}
            description={
              'With every ream you prevent 1 tree from being cut for paper production'
            }
          />
          <Point
            icon={'/gifs/save-the-world.gif'}
            heading={'Saving Earth'}
            description={
              'With every ream you offset 200 Kgs of carbon footprint helping avert global warming'
            }
          />
        </div>
        {/* Right column - Paper Image and Tagline */}
        <div className="relative col-span-6 flex flex-col justify-center md:justify-start">
          <div className="relative -left-4 top-[50%] inline-block h-min w-fit -translate-y-1/2 transform">
            <div className="relative flex max-h-[37.5rem] max-w-[37.5rem] rounded-full after:absolute after:left-[50%] after:top-[50%] after:-z-10 after:h-[90%] after:w-[90%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-buttr-green">
              <Image
                src={Paper}
                alt="BUTTR Paper Stack"
                width={800}
                height={800}
                className="object-contain"
              />
              <div
                className={
                  'absolute inset-0 left-[6em] aspect-square max-h-[37.5rem] max-w-[37.5rem] overflow-clip md:left-[8em]'
                }
              >
                <div className="relative left-[35%] top-[50%] flex w-fit -rotate-[28deg] flex-col items-center justify-center gap-4">
                  <Link
                    href={'/about'}
                    className={
                      'text-[1em] font-black uppercase transition hover:scale-105 hover:text-buttr-green hover:drop-shadow md:text-[1.25rem]'
                    }
                  >
                    Know More
                  </Link>
                  <Link
                    href={'/store'}
                    className={
                      'text-[1em] font-black uppercase transition hover:scale-105 hover:text-buttr-green hover:drop-shadow md:text-[1.25em]'
                    }
                  >
                    Shop Buttr
                  </Link>
                  <Link
                    href={'/contact'}
                    className={
                      'text-[1em] font-black uppercase transition hover:scale-105 hover:text-buttr-green hover:drop-shadow md:text-[1.25em]'
                    }
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative -top-1/4 flex md:-top-1/3 md:left-24">
              <h2 className="line-height-0.5 ml-auto px-2 text-3xl font-bold leading-none text-gray-900 md:text-5xl">
                From Bin
                <br />
                To Pin
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="pt-8">
        <Socials />
      </div>
    </main>
  );
}
