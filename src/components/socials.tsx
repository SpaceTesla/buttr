import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Logos } from '@/constants/logos';

const Socials = () => {
  return (
    <div
      className={
        'fixed bottom-2 left-1/2 flex -translate-x-1/2 gap-4 md:bottom-8 md:left-8 md:translate-x-0'
      }
    >
      <Button variant={'link'} className={'m-0 p-0'} asChild>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Logos.Facebook}
            alt={'facebook'}
            className={'rounded-full bg-buttr-yellow'}
            width={32}
            height={32}
          />
        </a>
      </Button>
      <Button variant={'link'} className={'m-0 p-0'} asChild>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={Logos.Twitter}
            alt={'twitter'}
            className={'rounded-full bg-buttr-yellow'}
            width={32}
            height={32}
          />
        </a>
      </Button>
      <Button variant={'link'} className={'m-0 p-0'} asChild>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Logos.Instagram}
            alt={'instagram'}
            className={'rounded-full bg-buttr-yellow'}
            width={32}
            height={32}
          />
        </a>
      </Button>
      <Button variant={'link'} className={'m-0 p-0'} asChild>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Logos.WhatsApp}
            alt={'whatsapp'}
            className={'rounded-full bg-white'}
            width={32}
            height={32}
          />
        </a>
      </Button>
    </div>
  );
};

export default Socials;
