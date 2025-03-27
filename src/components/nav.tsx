'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-50 flex h-20 w-full items-center justify-between bg-buttr-green px-6 shadow-sm md:bg-white">
      {/* Decorative circle - responsive positioning */}
      <div className="absolute -left-[280px] -top-[440px] z-10 hidden h-[560px] w-[560px] rounded-full bg-buttr-green/60 md:block"></div>

      <div className="nav-left relative z-30 drop-shadow-2xl">
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

      <button
        onClick={toggleMenu}
        className="z-30 md:hidden"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile menu with animation */}
      <div
        className={`fixed inset-0 z-20 transform bg-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '80px' }}
      >
        <div className="flex h-full flex-col items-center justify-start gap-8 p-8 pt-12">
          <Link
            href="/"
            className="w-full border-b border-gray-100 pb-2 text-center text-lg font-medium transition hover:text-buttr-green"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="w-full border-b border-gray-100 pb-2 text-center text-lg font-medium transition hover:text-buttr-green"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/store"
            className="w-full border-b border-gray-100 pb-2 text-center text-lg font-medium transition hover:text-buttr-green"
            onClick={() => setIsMenuOpen(false)}
          >
            Store
          </Link>
          <Link
            href="/blog"
            className="w-full border-b border-gray-100 pb-2 text-center text-lg font-medium transition hover:text-buttr-green"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="w-full border-b border-gray-100 pb-2 text-center text-lg font-medium transition hover:text-buttr-green"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
