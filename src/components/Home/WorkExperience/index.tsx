// import Timeline from '@/components/Home/WorkExperience/Timeline';

import dynamic from 'next/dynamic';

const Timeline = dynamic(() => import("@/components/Home/WorkExperience/Timeline"))

const WorkExperience = () => {
  return (
    <section className='px-8'>
      <h1 className='text-[28px] font-bold'>
        Work&nbsp;
        <span className='h-full button-accent inline rounded p-1'>Experience</span>
      </h1>

      <Timeline />
    </section>
  );
};

export default WorkExperience;
