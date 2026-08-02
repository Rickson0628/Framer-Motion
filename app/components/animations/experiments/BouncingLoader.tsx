"use client";

import React from 'react';
import { motion } from 'motion/react';

/**
 * MOTION COPY/PASTE COMPONENT
 * Copy this file into a React/Next.js project after running `npm install motion`.
 * Keep "use client" in a Next.js App Router project for the looping animation.
 * Change Array(3) for the dot count, y for bounce height, and duration for speed.
 */

const BouncingLoader = () => {
  return (
    <div className='flex  mt-5  gap-1 '>
      
      {/* Each index adds a delay, producing the wave instead of moving every dot together. */}
      {[...Array(3)].map((_, index)=>(
       <motion.span key={index} className='bg-black rounded-2xl p-1' 
        animate={{ y: [0,-5,0]}}
        transition={{duration: 1, ease: "linear",repeat:Infinity , repeatDelay: index * 0.3}}>
          
       </motion.span> 
      ))}
    </div>
  );
};

export default BouncingLoader;
