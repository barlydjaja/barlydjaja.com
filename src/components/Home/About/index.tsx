import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className='px-8'>
      <button
        className='border-gradient2 rounded-full py-1 px-2.5 flex items-center justify-center mb-2 text-2xl font-medium'>
        <span className='text-accent text-xl font-bold'>About Me</span>
      </button>

      {/*ABOUT ME*/}
      <div>
        <h1 className='text-4xl font-bold leading-[45px] mb-1.5'>I&apos;m a Frontend</h1>
        <p className='text-accent text-4xl font-bold border-2 p-1 inline-block rotate-2 relative mb-5'>
          <span>Developer</span>

          {/*DOTS*/}
          <span className='absolute border-2 w-2 h-1.5 bg-[--blue] -left-1 -top-1 box-content' />
          <span className='absolute border-2 w-2 h-1.5 bg-[--blue] -right-1 -top-1 box-content' />
          <span className='absolute border-2 w-2 h-1.5 bg-[--blue] -left-1 -bottom-1 box-content'/>
          <span className='absolute border-2 w-2 h-1.5 bg-[--blue] -right-1 -bottom-1 box-content'/>
        </p>

        <div className='text-sm text-[--text] leading-5'>
          Hey there!
          <br/>
          My name is Barly, I&apos;m a frontend developer currently working for&nbsp;
          <Link href="https://shopee.com" className='text-accent' target="_blank" rel="noopener noreferrer">
            Shopee Indonesia &nbsp;
            <Image src='https://shopee.co.id/favicon.ico' alt='ic-shpee' width={12} height={12} className='inline'/>
          </Link>.
          I have been working professionally as a frontend developer for more than 4 years now. The tech I&nbsp;m using
          on a daily basis is&nbsp;
          <Link href="https://react.dev" className='text-accent' target="_blank" rel="noopener noreferrer">React</Link>,&nbsp;
          <Link href="https://vuejs.org/" className='text-accent' target="_blank" rel="noopener noreferrer">Vue</Link>,&nbsp;and&nbsp;
          <Link href="https://typescriptlang.org/" className='text-accent' target="_blank" rel="noopener noreferrer">Typescript</Link>.
          <br/>
          <br/>
          My work as a frontend engineer consist of translating design into web or mobile apps. I also need to communicate with
          other stakeholders such as backend engineer, qa engineer, and product manager to make sure that we are all aligned
          with the current project. I work with good efficiency without sacrificing the quality of the code and pixel perfect sense of UI design.
          <br/>
          <br/>
          If you want to get in touch with me feel free to reach into my&nbsp;
          <Link href='https://www.linkedin.com/in/barly-djaja/' className='text-accent' target='_blank' rel="noopener noreferrer">
            LinkedIn
          </Link>
          &nbsp;and hit me up there.
          <br/>
          Cheers!
        </div>
      </div>
    </section>
  );
};

export default About;
