import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { color } from 'three/examples/jsm/nodes/Nodes.js';

export type GlassEffectProps = {
    title: string;
    subtitle?: string;
};

export function Model({ title, subtitle }: GlassEffectProps) {
  const { nodes } = useGLTF("/glassEffect/medias/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    //ts-ignore
    torus.current.rotation.x += 0.02;
  });

  // TODO: Uncomment for Cusstom Controls
  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  //   color: { value: "#ffffff" },
  //   distortion: { value: 0.1, min: 0, max: 1, step: 0.1 },
  // });

  const materialPropsCustom = {
    color: 'e2ff00',
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
    distortion: 0.2,

  }

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        font={"/glassEffect/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
{subtitle ?  <Text
        font={"/glassEffect/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, -0.5, -1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {subtitle}
      </Text> : null}
      <mesh ref={torus} {...nodes.Torus002}>
      {/* TODO: uncomment for custom Controls */}
      {/* <MeshTransmissionMaterial {...materialProps}  />  */}

        <MeshTransmissionMaterial {...materialPropsCustom}  /> 
      </mesh>
    </group>
  );
}