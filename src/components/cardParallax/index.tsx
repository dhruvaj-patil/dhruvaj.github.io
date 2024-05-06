'use client';
import styles from './style.module.css'
import { jobExperiences } from './data';
import Card from '@/components/cardParallax/Card/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis();
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <div ref={container} className={styles.main}>
      {jobExperiences.map((jobExperience, i) => {
        const targetScale = 1 - (jobExperiences.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...jobExperience}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}