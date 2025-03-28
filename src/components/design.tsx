import React from 'react';
import Pattern from '../../public/pattern.webp';
import Image from 'next/image';

const Design = () => {
  return (
    <>
      <div
        className={
          'fixed -bottom-[400px] -right-[400px] hidden h-[560px] w-[560px] rounded-full md:block'
        }
      >
        <Image
          src={Pattern}
          alt="BUTTR Paper Pattern"
          width={800}
          height={800}
          className="object-contain"
          loading="lazy"
          quality={60}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          sizes="(max-width: 1024px) 0vw, 560px"
        />
      </div>
    </>
  );
};
export default Design;
