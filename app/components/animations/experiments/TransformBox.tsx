"use client";

import { motion , useMotionValue, useTransform }from 'motion/react';

/**
 * MOTION COPY/PASTE COMPONENT
 * Copy this file into a React/Next.js project after running `npm install motion`.
 * Keep "use client" in a Next.js App Router project because this uses Motion hooks.
 * Replace the `box` class with your own size/shape styles if you do not copy its CSS.
 */

const TransformBox = () => {
  // xAxis stores the live horizontal drag position without causing React re-renders.
  const xAxis = useMotionValue(0);

  // CHANGE THIS: match drag positions to the colors you want at each point.
  // Both arrays must always contain the same number of values.
  const bgColor= useTransform(xAxis, [-150, 0 ,150], ["#12FF1A", "#7CF7E7", "#0E41E8"])

  return (
    <div>
      {/* CHANGE THIS constraint to control how far the user can drag the box. */}
      <motion.div className='box' drag dragConstraints={{left: -100, right:100}} style={{ x:xAxis, backgroundColor: bgColor}}></motion.div>
    </div>
  );
};

export default TransformBox;
