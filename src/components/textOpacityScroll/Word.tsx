import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.css';

export default function Paragraph({paragraph}: {paragraph: string}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <div className='flex justify-center items-center'>

  
    <p 
      ref={container}         
      className={styles.paragraph}
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })
    }
    </p>
    </div>
  )
}

const Word = ({children, progress, range}: {children: string, progress:  MotionValue<number>, range: number[]}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return <span className={styles.word}>
    <span className={styles.shadow}>{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </span>
}
