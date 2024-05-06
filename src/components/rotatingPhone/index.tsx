'use client';
import { Environment, Html, ScrollControls, useGLTF, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import React, { Suspense } from 'react'
import { TextureLoader } from 'three';
import { Model, ModelProps } from './Model';

function Loader() {
  const {progress, active, errors} = useProgress()
  console.log("🚀 ~ Loader ~ progress:", progress)

  return <Html center>{progress.toFixed(1)} % Loaded</Html>
}

function index(props: ModelProps) {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <Suspense fallback={<Loader />}>
        <Model {...props} />
      </Suspense>
      <ambientLight intensity={0.1} />
      <Environment preset="city" />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]}/>
    </Canvas>
  );
}

export default index