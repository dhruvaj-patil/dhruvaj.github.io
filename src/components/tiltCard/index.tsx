'use client'
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
// import { FiMousePointer } from "react-icons/fi";

// const index = () => {
//   return (
//     <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
//       <TiltCard />
//     </div>
//   );
// };

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;


const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: any) => {
    console.log("🚀 ~ handleMouseMove ~ e:", e)
    if (!ref.current) return [0, 0];
  
    const rect = ref.current.getBoundingClientRect();
  
    const width = rect.width;
    const height = rect.height;
  
    const mouseX = ((e.clientX - rect.left)/10) * ROTATION_RANGE;
    const mouseY = ((e.clientY - rect.top)/10) * ROTATION_RANGE;
  
    // Define the minimum and maximum rotation values
    const MIN_ROTATION = -30;
    const MAX_ROTATION = 30;
  
    // Calculate the rotation values and clamp them to the min and max
    const rX = Math.max(MIN_ROTATION, Math.min(MAX_ROTATION, (mouseY / height - HALF_ROTATION_RANGE)));
    const rY = Math.max(MIN_ROTATION, Math.min(MAX_ROTATION, (mouseX / width - HALF_ROTATION_RANGE)));
  
    x.set(rX);
    y.set(rY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative size-full rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl" 
        />*/}
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p>
      </div>
    </motion.div>
  );
};
//  index;
export default TiltCard;