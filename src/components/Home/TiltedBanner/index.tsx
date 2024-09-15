import React from 'react';

// Web Developer ✦ App Developer ✦ Frontend Developer ✦ React Developer ✦ Vue Developer
const TiltedBanner = () => {
  return (
    <div
      className='button-accent flex items-center justify-center h-[52px] relative overflow-hidden shadow-inner text-lg mb-20'>
      <p className='absolute whitespace-nowrap slide-left-to-right1'>
        Web Developer
      </p>

      <p className='absolute whitespace-nowrap slide-left-to-right2'>
        ✦
      </p>

      <p className='absolute whitespace-nowrap slide-left-to-right3'>
        App Developer
      </p>

      <p className='absolute whitespace-nowrap slide-left-to-right4'>
        ✦
      </p>

      <p className='absolute whitespace-nowrap slide-left-to-right5'>
        Frontend Developer
      </p>

      <p className='absolute whitespace-nowrap slide-left-to-right6'>
        ✦
      </p>
    </div>
  );
};

export default TiltedBanner;
