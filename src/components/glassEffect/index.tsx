'use client';
import { Canvas } from '@react-three/fiber'
// import Model from './Model';
import { Environment } from '@react-three/drei'
import { GlassEffectProps, Model } from '@/components/glassEffect/Model';




export default function Index(glassEffectProps: GlassEffectProps) {
    // const { title, subtitle } = props;
  return (
    <Canvas style={{background: '#000000'}}>
        <Model {...glassEffectProps} />
        <directionalLight intensity={2} position={[0, -1, 3]}/>
        <Environment preset="city" />
    </Canvas>
  )
}