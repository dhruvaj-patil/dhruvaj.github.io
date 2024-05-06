import { headers } from 'next/headers'
import React from 'react'
import styles from "./todo.module.css";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import('@/components/glassEffect/index'), {ssr: false})

function Todo() {
  return (
    <div
      className="h-svh w-full bg-black"
      style={{ height: "100vh"}}
    >
      <Scene />
    </div>
  );
}

export default Todo