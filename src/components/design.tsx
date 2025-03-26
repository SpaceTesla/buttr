import React from 'react';
import Pattern from '../../public/pattern.png';
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
          alt="BUTTR Paper Stack"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>
    </>
  );
};
export default Design;
