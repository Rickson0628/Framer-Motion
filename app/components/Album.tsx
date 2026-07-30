"use client";

import { motion, stagger } from "motion/react";
import { useState } from "react";

const images = [
  {
    source:
      "https://i.pinimg.com/236x/79/37/69/7937691ef4860364d7379a42c743c44c.jpg",
    name: "Soft Beginnings",
    caption:
      "Every beautiful journey begins with one quiet, unforgettable moment.",
  },
  {
    source:
      "https://i.pinimg.com/736x/85/81/f3/8581f3e1b6bb05a8557bf13f4e096100.jpg",
    name: "Between Moments",
    caption:
      "Sometimes the memories that matter most are found in the pauses.",
  },
  {
    source:
      "https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    name: "Golden Horizon",
    caption:
      "Even the longest day leaves behind a little warmth and light.",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      delayChildren: stagger(0.08, { from: "last" }),
    },
  },

  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: stagger(0.5),
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

const imageVariants = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.08,
  },
};

const overlayVariants = {
  rest: {
    opacity: 0,
  },

  hover: {
    opacity: 1,
  },
};

export default function Album() {
  const [showImages, setShowImages] = useState(false);

  return (
    <section className="w-full p-10">
      <button
        type="button"
        aria-expanded={showImages}
        onClick={() => setShowImages((previous) => !previous)}
        className="mb-4 rounded-xl bg-black/80 p-4 text-white/80"
      >
        {showImages ? "Hide Images" : "Show Images"}
      </button>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={showImages ? "visible" : "hidden"}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {images.map((image) => (
          <motion.figure
            key={image.source}
            variants={itemVariants}
            className="aspect-[4/3] overflow-hidden rounded-2xl border border-black/80 shadow-xl"
          >
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="relative h-full w-full"
            >
              <motion.img
                src={image.source}
                alt={image.name}
                loading="lazy"
                draggable={false}
                variants={imageVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="h-full w-full object-cover"
              />

              <motion.figcaption
                variants={overlayVariants}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-5 text-center text-white"
              >
                <h2 className="text-xl font-bold">{image.name}</h2>

                <p className="mt-2 text-sm text-white/80">
                  {image.caption}
                </p>
              </motion.figcaption>
            </motion.div>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}