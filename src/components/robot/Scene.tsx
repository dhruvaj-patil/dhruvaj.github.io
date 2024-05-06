"use client"

import React, { Suspense } from 'react'
import {Canvas , useThree} from '@react-three/fiber';
import Model from './Model';
import { Html, Scroll, ScrollControls, useProgress } from '@react-three/drei';



function Loader() {
    const {progress, active, errors} = useProgress()
    console.log("🚀 ~ Loader ~ progress:", progress)

    return <Html center>{progress.toFixed(1)} % Loaded</Html>
}



function Scene() {

  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      {/* <ambientLight intensity={0.5} />
        <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10,-10,-10]} /> */}
      <directionalLight position={[-5, -5, -5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.1} pages={5}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}

export default Scene