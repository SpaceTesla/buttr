'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import Link from 'next/link';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-50 flex w-full items-center justify-between bg-white p-6">
      <div className="absolute -left-[280px] -top-[430px] z-10 h-[560px] w-[560px] rounded-full bg-buttr-green"></div>
      <div className="nav-left z-30">
        <Link href="/">
          <Image src={Logo} alt="logo" width={128} height={128} />
        </Link>
      </div>
      <div className="nav-center hidden gap-8 font-medium uppercase md:flex">
        <Link
          href="/"
          className="cursor-pointer transition hover:text-buttr-green"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="cursor-pointer transition hover:text-buttr-green"
        >
          About Us
        </Link>
        <Link
          href="/store"
          className="cursor-pointer transition hover:text-buttr-green"
        >
          Store
        </Link>
        <Link
          href="/blog"
          className="cursor-pointer transition hover:text-buttr-green"
        >
          Blog
        </Link>
      </div>
      <Link
        href="/contact"
        className="nav-right hidden bg-buttr-green px-4 py-2 uppercase md:block"
      >
        Contact Us
      </Link>
      <div className="z-30 md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 top-16 flex w-full flex-col items-center gap-4 bg-white py-4 md:hidden">
          <Link
            href="/"
            className="cursor-pointer transition hover:text-buttr-green"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="cursor-pointer transition hover:text-buttr-green"
          >
            About Us
          </Link>
          <Link
            href="/store"
            className="cursor-pointer transition hover:text-buttr-green"
          >
            Store
          </Link>
          <Link
            href="/blog"
            className="cursor-pointer transition hover:text-buttr-green"
          >
            Blog
          </Link>
          <Link href="/contact" className="bg-buttr-green px-4 py-2 uppercase">
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
