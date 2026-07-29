"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((previous) => !previous);
  };

  return (
    <div className="flex flex-col items-start gap-5">
      <button type="button" onClick={toggleVisibility}>
        {isVisible ? "Remove box" : "Show box"}
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="box"
            className="size-40 bg-blue-500"
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
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