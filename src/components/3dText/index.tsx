'use client'
import styles from './text3d.module.css'
import Text3d from './Text3d';
import { useRef, useEffect, MouseEventHandler } from 'react';

export type Text3dProps = {
    primary: string;
    secondary: string;
    url: string
    className?: string
};

export default function index({ texts }: { texts: Text3dProps[] }) {
  console.log("🚀 ~ index ~ props:", texts);

  const plane = useRef<HTMLDivElement>(null);
  const maxRotate = 45;

  const manageMouseMove = (e: any) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    if (plane && plane.current) {
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.container}
      //   className='left-3/4'
    >
      <div ref={plane} className={`${styles.body} `}>
        {texts.map((prop) => (
          <Text3d {...prop} />
        ))}
      </div>
    </div>
  );
}