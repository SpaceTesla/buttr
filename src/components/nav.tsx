import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import Link from 'next/link';

const Nav = () => {
  return (
    <div
      className={'fixed flex w-full items-center justify-between bg-white p-6'}
    >
      <div
        className={
          'absolute -left-[280px] -top-[430px] z-10 h-[560px] w-[560px] rounded-full bg-buttr-green'
        }
      ></div>
      <div className={'nav-left z-30'}>
        <Link href={'/'}>
          <Image src={Logo} alt={'logo'} width={128} height={128} />
        </Link>
      </div>
      <div className={'nav-center flex gap-8 font-medium uppercase'}>
        <Link
          href={'/'}
          className={'cursor-pointer transition hover:text-buttr-green'}
        >
          Home
        </Link>
        <Link
          href={'/about'}
          className={'cursor-pointer transition hover:text-buttr-green'}
        >
          About Us
        </Link>
        <Link
          href={'/store'}
          className={'cursor-pointer transition hover:text-buttr-green'}
        >
          Store
        </Link>
        <Link
          href={'/blog'}
          className={'cursor-pointer transition hover:text-buttr-green'}
        >
          Blog
        </Link>
      </div>
      <Link
        href={'/contact'}
        className={'nav-right bg-buttr-green px-4 py-2 uppercase'}
      >
        Contact Us
      </Link>
    </div>
  );
};
export default Nav;
