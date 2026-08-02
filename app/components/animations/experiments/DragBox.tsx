"use client";

import React from 'react';
import { motion } from 'motion/react';

/**
 * MOTION COPY/PASTE COMPONENT
 * Copy this file into a React/Next.js project after running `npm install motion`.
 * The active example is a hover animation; the commented examples show drag and tap.
 * Keep "use client" in a Next.js App Router project for pointer interactions.
 */

const DragBox = () => {
  return (
    <div>

      {/* OPTIONAL DRAG VERSION: uncomment this block and remove the active box below. */}
      {/* <motion.div className='bg-amber-400 w-20 h-30 p-4' drag dragConstraints={{ top:10, bottom:10, left:10, right:10 }}>
          Drag Me
      </motion.div> */}
      

      {/* OPTIONAL TAP VERSION: uncomment this block and remove the active box below. */}
      {/* <motion.div className='bg-amber-400 w-20 h-30 p-4' whileTap={{scale: 0.6, background:"green"}}
      transition={{type:"spring", stiffness:300  }}></motion.div>
       */}

      {/*
        ACTIVE HOVER VERSION
        CHANGE THIS: scale, rotation keyframes, and backgroundColor define the effect.
        Each property has its own transition so you can tune them independently.
      */}
<motion.div
  className="h-30 w-20 bg-amber-400 p-4"
  whileHover={{
    scale: 1.2,
    rotate: [0, 180, 90],
    backgroundColor: "#22c55e",
  }}
  transition={{
    rotate: {
      type: "tween",
      duration: 0.6,
      ease: "easeInOut",
    },
    scale: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
    backgroundColor: {
      duration: 0.3,
        
    },
  }}
/>

    </div>
  );
};

export default DragBox;
