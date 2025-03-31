import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Logos } from '@/constants/logos';

const Socials = () => {
  return (
    <div className={'flex gap-4 p-4'}>
      <Button variant={'link'} className={'m-0 p-0'} asChild>
        <a
          href="https://www.facebook.com/buttrpaper"
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
        <a
          href="https://www.twitter.com/buttrpaper"
          target="_blank"
          rel="noopener noreferrer"
        >
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
          href="https://www.instagram.com/buttrpaper"
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
          href="https://www.linkedin.com/company/buttrpaper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Logos.LinkedIn || '/logos/linkedin.svg'}
            alt={'linkedin'}
            className={'rounded-full bg-[#2f2f2f] bg-buttr-yellow'}
            width={32}
            height={32}
          />
        </a>
      </Button>
      <Button variant={'link'} className={'m-0 p-0'} asChild>
        <a
          href="https://www.youtube.com/@BUTTRPaper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Logos.Youtube}
            alt={'youtube'}
            className={'rounded-full bg-buttr-yellow'}
            width={32}
            height={32}
          />
        </a>
      </Button>
    </div>
  );
};

export default Socials;
