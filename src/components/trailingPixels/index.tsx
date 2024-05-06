'use client'
import styles from './trailingpixel.module.css'
import { useState, useEffect } from 'react';

export default function TrailingPixels() {

  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, [])

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
      return [...Array(nbOfBlocks)].map((_, index) => {
        return <div onMouseEnter={(e) => {colorize(e.target)}} key={index}></div>
    })
  }

  const colorize = (el: any) => {
    el.style.backgroundColor = 'var(--primary-dark)'
    setTimeout( () => {
      el.style.backgroundColor = 'transparent';
    }, 300)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h1 className='text-nowrap'>Dhruvaj Patil</h1>
        <h6 className='text-nowrap font-thin underline underline-offset-1 leading-9'>Fullstack Developer</h6>
      </div>
      <div className={styles.grid}>
        {
          windowsWidth > 0 && [...Array(20)].map( (_, index) => {
            return <div key={index} className={styles.column}>
                {
                  getBlocks()
                }
            </div>
          })
        }
      </div>
    </div>
  )
}