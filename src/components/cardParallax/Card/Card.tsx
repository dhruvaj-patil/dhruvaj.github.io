'use client'
import Image from 'next/image';
import styles from './card.module.css';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Job } from '../data';




export type FramerMotionProps = {
    progress: MotionValue<number>;
    range: number[];
    targetScale?: number;
}

const Card = ({i, title, description, location, position, stack, year, color, progress, range, targetScale, jobType}: Job & FramerMotionProps & {i:number}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div>
          <h2>{title}</h2>
          <h4>
            {location} | <b>{position}</b> | {jobType} | {year}
          </h4>
        </div>

        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            {/* <span>
              <a href={link} target="_blank">See more</a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
              </svg>
            </span> */}
          </div>

          <div className={styles.stackContainer}>
            {/* <h1 className="text-center">Stack:</h1> */}
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              {stack?.map(({ tech, url }, i) => (
                <div key={`${tech}_${i}`} className={styles.logoContainer}>
                  <Image
                    src={`/techLogo/${url}`}
                    alt="image"
                    width={64}
                    height={64}
                    className='w-8 md:w-12 h-auto'
                    // sizes=""
                  />
                  {/* <p>{tech}</p> */}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card