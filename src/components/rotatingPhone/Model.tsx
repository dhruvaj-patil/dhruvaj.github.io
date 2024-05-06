import React, { useRef, useState } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text, useScroll } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { color } from 'three/examples/jsm/nodes/Nodes.js';



export type ModelProps = {
  position: [number, number, number];
  rotation: [number, number, number];
};
export function Model({position, rotation}: ModelProps) {
  const { nodes, animations, scene } = useGLTF("/phone/phone.glb");  
  console.log("🚀 ~ Model ~ scene:", scene)
  console.log("🚀 ~ Model ~ nodes:", nodes)
  console.log("🚀 ~ Model ~ animations:", animations)
  const { viewport } = useThree();
  const phone = useRef(null);

//   const scroll = useScroll();
//   console.log("🚀 ~ Model ~ scroll:", scroll)
  
  useFrame(
      () =>
        //@ts-ignore
      (phone.current.rotation.y += 0.005 )
    //   //@ts-ignore
    //     (phone.current.rotation.x + scroll.offset))
  )






  return (
    <group
      scale={viewport.width / 20}
      ref={phone}
      position={position}
      rotation={rotation}  
    >
      <primitive object={scene} />
    </group>
  );
}