'use client';

import React from 'react';
import Image from 'next/image';
import bg from '../../../public/images/1.jpg';

export const MainPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src={bg}
        width={0}
        height={0}
        alt={''}
        priority
        style={{
          height: '100vh',
          objectFit: 'cover',
          background: 'transparent',
          top: 0,
          left: 0,
          position: 'fixed',
          zIndex: -1
        }}
      ></Image>
      {/* <button
        className="text-black border p-1 hover:bg-sky-700 
        transition ease-in-out delay-100 hover:text-white"
        onClick={() => alert('fef')}
      >
        click
      </button> */}

      {/* <!-- Modal toggle --> */}
    </div>
  );
};
