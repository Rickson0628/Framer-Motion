"use client";

import { motion } from 'motion/react'

/**
 * MOTION COPY/PASTE COMPONENT
 * Copy this file into a React/Next.js project after running `npm install motion`.
 * Keep "use client" for its hover, tap, and drag interactions.
 * Reuse it with: <DogCard name="..." description="..." imageSrc="..." />.
 */

// CHANGE THIS: these values are used only when the matching props are omitted.
const defaultDescription =
  "A playful and loyal companion with a gentle personality, bright eyes, and endless enthusiasm for outdoor adventures.";

const defaultImage =
  "https://hips.hearstapps.com/hmg-prod/images/c33b2259-8c6b-4308-bc6f-5373d8a6600d.jpeg?crop=0.668xw:1.00xh;0.194xw,0&resize=640";

export default function DogCard({
  name = "Winnie The Doggo",
  description = defaultDescription,
  imageSrc = defaultImage,
}) {
  return (
    // CHANGE THIS interaction block to tune hover, tap, drag, and spring behavior.
    <motion.article className="w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl"
    drag
    whileHover={{
      scale: 1.2, 
      background:"#F9FFC2",}}
    whileTap={{
      rotate:[180, 90],
      scale:0.8}}
    dragConstraints={{
      top:5,
      bottom:5,
      left:5,
      right:5,}}
    dragElastic={0.2}
    whileDrag={{scale:0.4}}
    transition={{type:"spring", damping:20, stiffness:300 }}
      >

      {/* Replace imageSrc through props; keep useful alt text for accessibility. */}
      <img
        src={imageSrc}
        alt={`${name}, a playful dog`}
        loading="lazy"
        decoding="async"
        className="h-50 w-full object-cover"
      />

      <div className="flex flex-col justify-center items-center p-5">
        <h2 className="mb-2 text-xl font-bold">{name}</h2>

        <p className="text-base leading-relaxed text-gray-700">
          {description}
        </p>

        <button
          type="button"
          className="mt-5 w-full rounded-md bg-yellow-300 px-4 py-3 font-medium transition-colors hover:bg-yellow-400"
        >
          Learn more
        </button>
      </div>
    </motion.article>
  );
}
