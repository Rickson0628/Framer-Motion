"use client";

import { motion } from "motion/react"

/**
 * MOTION COPY/PASTE COMPONENT
 * Copy this file into a React/Next.js project after running `npm install motion`.
 * Pass any button label through the text prop: <PulsingButton text="Get started" />.
 * Keep "use client" in a Next.js App Router project for this interactive animation.
 */

type PulsingButtonProps = {
  text: string;
};

const PulsingButton = ({ text }: PulsingButtonProps) => {
  return (
    // CHANGE THIS: scale/opacity arrays are the pulse keyframes.
    // duration controls speed, and repeat: Infinity keeps the pulse running.
    <motion.button className='bg-black p-4 px-8 rounded-2xl'
    animate={{ scale:[1, 1.2, 1], opacity:[ 1, 0.7, 1 ]}}
    transition={ {duration: 0.8, ease: "easeInOut",repeat: Infinity}}>
      <div className='text-white'>{text}</div>
    </motion.button>
  );
};

export default PulsingButton;
