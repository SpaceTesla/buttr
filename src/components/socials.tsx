import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Logos } from '@/constants/logos';

const Socials = () => {
  return (
    <div className={'fixed bottom-8 left-8 flex gap-4'}>
      <Button variant={'link'} className={'m-0 p-0'} asChild>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Logos.Facebook} alt={'facebook'} width={32} height={32} />
        </a>
      </Button>
      <Button variant={'link'} className={'m-0 p-0'} asChild>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src={Logos.Twitter} alt={'twitter'} width={32} height={32} />
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
          <Image src={Logos.WhatsApp} alt={'whatsapp'} width={32} height={32} />
        </a>
      </Button>
    </div>
  );
};

export default Socials;
