import Hero from '@/components/Home/Hero';
import TiltedBanner from '@/components/Home/TiltedBanner';
import About from '@/components/Home/About';

export default function Home() {
  return (
    <div className="my-16">
      <Hero/>
      <TiltedBanner/>
      <About/>
    </div>
  );
}
