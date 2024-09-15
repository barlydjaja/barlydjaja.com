import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfilePicture from '@/assets/images/profile-picture.png';

const Hero = () => {
  return (
    <main className='px-8 flex items-center justify-between flex-wrap gap-14 mb-7'>
      {/*LEFT SECTION*/}
      <section>
        {/*GREETING*/}
        <button
          className='border-gradient1 rounded-full py-1 px-2.5 flex items-center justify-center mb-2.5 text-2xl font-medium'>
          <span className='text-accent'>Hello</span>
        </button>

        {/*INTRODUCTION*/}
        <section className='mb-5'>
          <h1 className='font-bold text-4xl mb-2'>I&apos;m&nbsp;
            <span className='text-accent'>
                Barly Joshua Djaja
              </span>
          </h1>
          <p className='text-lg'>I&apos;m a Frontend Developer</p>
        </section>

        {/*GET STARTED*/}
        <section className='flex flex-wrap items-start justify-start gap-4'>
          <Link href='https://thereaction.io' target="_blank" className='button-accent rounded-full py-3 px-6 mb-2.5 text-base font-medium'>
            Get started
          </Link>

          <Link href='https://thereaction.io' target="_blank"
                className='border-gradient2 rounded-full py-2.5 px-6 flex items-center justify-center mb-2.5 text-base font-medium'>
            Explore Project
          </Link>
        </section>
      </section>

      {/*RIGHT SECTION*/}
      <section className='flex-1 flex justify-end'>
        <div className='w-80 h-80 flex items-center justify-center'>
          <Image src={ProfilePicture} alt='me' width={320} height={320}
                 className='border-gradient2 rounded-2xl w-80 h-80 object-cover' priority placeholder='blur'/>
        </div>
      </section>
    </main>
  );
};

export default Hero;
