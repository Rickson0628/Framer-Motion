"use client";

import { motion } from "motion/react";

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
  return (
    <section className="grid w-full grid-cols-1 gap-4 p-10 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <motion.figure
          key={image.source}
          initial="rest"
          animate="rest"
          whileHover="hover"
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-black/80"
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
        </motion.figure>
      ))}
    </section>
  );
}