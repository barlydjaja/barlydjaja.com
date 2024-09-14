import styles from './style.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mt-16">

      <main className='px-8'>
        {/*GREETING*/}
        <button className={styles.greeting}>
          <span className={styles.accentText}>Hello</span>
        </button>

        {/*INTRODUCTION*/}
        <section className='mb-5'>
          <h1 className='font-bold text-4xl mb-2'>I&apos;m&nbsp;
            <span className={styles.accentText}>
              Barly Joshua Djaja
            </span>
          </h1>
          <p>I&apos;m a Frontend Developer</p>
        </section>

        {/*GET STARTED*/}
        <section className='flex flex-wrap items-start justify-start gap-4'>
          <Link href='https://thereaction.io' target="_blank" className={styles.buttonAccent}>
            Get started
          </Link>

          <Link href='https://thereaction.io' target="_blank" className={styles.buttonNormal}>
            Explore Project
          </Link>
        </section>
      </main>
    </div>
  );
}
