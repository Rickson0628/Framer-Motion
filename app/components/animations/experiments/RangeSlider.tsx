"use client";

import { animate } from 'motion';
import { motion, useMotionValue, useMotionValueEvent } from 'motion/react';
import { type ChangeEvent, useState } from 'react';

/**
 * MOTION COPY/PASTE COMPONENT
 * Copy this file into a React/Next.js project after running `npm install motion`.
 * Keep "use client" in a Next.js App Router project because this uses state and Motion hooks.
 * Replace the `box` class with your own size/shape styles if you do not copy its CSS.
 */

const RangeSlider = () => {
  // useMotionValue lets Motion update scale without re-rendering React every frame.
  // Alternative: useSpring(1) if you want the value to follow with spring physics.
  const scale = useMotionValue(Number(1))
  const [scaler, setScaler] = useState(1)

  // The range input supplies a new target and Motion smoothly animates toward it.
  const handleScaler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    // Use scale.set(value) instead if you want an instant change with no tween.
    setScaler(value)
    animate(scale, value, {
      type: "tween",
      duration: 1, // CHANGE THIS to control how quickly the box reaches the new scale.
      ease: "easeInOut",
    });

  }

  // OPTIONAL: remove these listeners when you no longer need console debugging.
  useMotionValueEvent(scale, "animationStart", () => {
    console.log("animation started on x")
  })

  useMotionValueEvent(scale, "change", (latest) => {
    console.log("x changed to", latest)
  })


  return (
    <div className='flex flex-col gap-50'>
      <motion.div
        className="box"
        style={{ scale }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          rotate: 10,
        }}
        whileTap={{
          opacity: 0.7,
        }}
        drag
        whileDrag={{
          rotate: -10,
          cursor: "grabbing",
        }}
        dragConstraints={{
          top: -100,
          left: -100,
          bottom: 100,
          right: 100,
        }}
        // Uncomment dragMomentum={false} to stop the box as soon as dragging ends.
        // Uncomment dragElastic and tune it to change resistance at the boundaries.
        transition={{
          opacity: { duration: 0.5 },
          y: { duration: 0.5 },
          rotate: { duration: 0.2 },
        }}
      />
      <div className='flex flex-col'>
        <label htmlFor="scaler">Scaler Value:{scaler}</label>
        {/* CHANGE THIS min/max pair to control the scale range available to users. */}
        <input type="range" id='scaler' name="scaler" min="0" max="7" value={scaler} onChange={handleScaler} />
      </div>
    </div>
  );
};

export default RangeSlider;


