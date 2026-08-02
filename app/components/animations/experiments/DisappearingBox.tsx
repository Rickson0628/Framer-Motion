"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * MOTION COPY/PASTE COMPONENT
 * Copy this file into a React/Next.js project after running `npm install motion`.
 * Keep "use client" because visibility is controlled with React state.
 * AnimatePresence is what allows the exit animation to finish after removal.
 */
// CHANGE THIS: hidden is the entry start, visible is resting state, and exit is removal.
const boxVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 2,
  },
};

export default function DisappearingBox() {
  // Set this to false if the box should begin hidden.
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((previous) => !previous);
  };

  return (
    <div className="flex flex-col items-start gap-5">
      <button type="button" onClick={toggleVisibility}>
        {isVisible ? "Remove box" : "Show box"}
      </button>

      {/* Keep AnimatePresence outside the condition or the exit variant cannot run. */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="box"
            className="size-40 bg-blue-500"
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // CHANGE THIS duration/easing to tune both entry and exit timing.
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
