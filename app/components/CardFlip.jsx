"use client";
import { useState } from "react";
import { motion } from "motion/react";

const cardVariants = {
  front: {
    rotateY: 0,
  },
  back: {
    rotateY: 180,
  },
};

export default function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="my-20 [perspective:100px]">
      <motion.button
        className="flex items-center justify-center bg-yellow-300 px-20 py-10"
        variants={cardVariants}
        initial="back"
        animate={isFlipped ? "back" : "front"}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        onClick={() => setIsFlipped((previous) => !previous)}
      >
        Card Flip
      </motion.button>
    </div>
  );
}