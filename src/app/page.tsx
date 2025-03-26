import Image from 'next/image';
import Paper from '../../public/paper.png';
import Socials from '@/components/socials';
import Point from '@/components/point';
import Link from 'next/link';
import { InfiniteMovingCards } from '@/components/infinite-moving-cards';

export const metadata = {
  title: 'BUTTR | Sustainable Papers',
  description:
    '100% Recycled, Tree-Free, Uber-Smooth, FSC Certified, and Premium Quality Papers for High-Speed Printing and Writing.',
};

export default function Home() {
  const paperAfterStyles =
    'after:absolute after:left-[50%] after:top-[50%] after:-z-10 after:h-[90%] after:w-[90%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-buttr-green';

  return (
    <main className="h-[calc(100vh-5rem)] overflow-x-clip pt-[5rem]">
      <div className="grid h-full min-h-full lg:grid-cols-9">
        {/* Left column - Benefits */}
        <div className="col-span-3 flex h-full flex-col items-start justify-center gap-8 py-8 pl-4 pr-4 lg:pr-16">
          <Point
            icon={'/gifs/water-saving.gif'}
            heading={'Saving Water'}
            description={
              'With every ream you save 70 litres of water when compared to traditional paper'
            }
            className={'xl:pl-2'}
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
            className={'xl:pl-2'}
          />
        </div>
        {/* Center column - Paper Image and Tagline */}
        <div className="relative col-span-6 flex flex-col justify-center md:justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 xl:max-h-[40rem] xl:max-w-[40rem]">
          <div className="relative flex h-min w-full items-center justify-center">
            <div
              className={`relative flex max-h-[37.5rem] max-w-[37.5rem] rounded-full xl:max-h-[50rem] xl:max-w-[50rem]`}
            >
              <Image
                src={Paper}
                alt="BUTTR Paper Stack"
                width={800}
                height={800}
                className="object-contain"
                priority={true}
              />
              <div
                className={
                  'absolute inset-0 left-[6em] aspect-square max-h-[37.5rem] max-w-[37.5rem] overflow-clip md:left-[8em]'
                }
              >
                <div
                  className="relative left-[35%] top-[50%] flex w-fit -rotate-[25deg] flex-col items-center justify-center gap-4 tracking-wider"
                  style={{
                    perspective: '800px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    style={{
                      transform: 'rotateY(25deg) rotateX(10deg)',
                      transformStyle: 'preserve-3d',
                    }}
                    className="flex flex-col items-center gap-4"
                  >
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
              {/*<div className="absolute bottom-12 right-4 flex items-end justify-start md:-right-16 md:bottom-32">*/}
              {/*  <h2 className="line-height-0.5 px-2 text-2xl font-bold leading-none text-gray-900 md:text-4xl xl:text-5xl">*/}
              {/*    From Bin*/}
              {/*    <br />*/}
              {/*    To Pin*/}
              {/*  </h2>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <div
          className="group absolute right-8 top-[15%] flex translate-y-1/2 cursor-pointer flex-col text-center"
          title="Hover to see our clients"
        >
          <div className="w-[160px] p-4 text-center text-xl font-bold hover:text-buttr-green">
            Our Clients
          </div>
          {/* Client logos container */}
          <div className="absolute right-0 top-full mt-2 w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[160px]">
            <div className="w-[160px]">
              <InfiniteMovingCards
                speed="normal"
                direction="down"
                pauseOnHover={true}
                cards={[
                  <div
                    key="client1"
                    className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
                  >
                    <Image
                      src="/logos/clients/logo1.png"
                      alt="Client"
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>,
                  <div
                    key="client1"
                    className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
                  >
                    <Image
                      src="/logos/clients/logo2.png"
                      alt="Client"
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>,
                  <div
                    key="client1"
                    className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
                  >
                    <Image
                      src="/logos/clients/logo3.png"
                      alt="Client"
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>,
                  <div
                    key="client1"
                    className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
                  >
                    <Image
                      src="/logos/clients/logo4.png"
                      alt="Client"
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>,
                  <div
                    key="client1"
                    className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
                  >
                    <Image
                      src="/logos/clients/logo5.png"
                      alt="Client"
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>,
                  <div
                    key="client1"
                    className="flex h-16 w-full items-center justify-center rounded-lg bg-white p-2 shadow-sm"
                  >
                    <Image
                      src="/logos/clients/logo6.png"
                      alt="Client"
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>,
                  /* Other client cards remain unchanged */
                ]}
                className="h-[400px]"
              />
            </div>
          </div>{' '}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="pt-8">
        <Socials />
      </div>
    </main>
  );
}
