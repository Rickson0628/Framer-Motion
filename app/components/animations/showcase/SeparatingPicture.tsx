"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

/**
 * COPY/PASTE NOTES
 * - Replace imageUrl with your own image and replace both desktop/mobile text blocks.
 * - Change h-[240vh] below to make the scroll story shorter or longer.
 * - Edit transform output values to change distance, rotation, scale, or timing.
 * - IMPORTANT: every useTransform input and output array must have the same length.
 * - The lg: classes switch between horizontal desktop and vertical mobile layouts.
 */
const SeparatingPicture = () => {
  const sectionRef = useRef(null);

  // Tracks the scroll progress of the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // CHANGE THIS: the output values control how far desktop images separate.
  const leftX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75, 1],
    ["0vw", "0vw", "-34vw", "-34vw"]
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75, 1],
    ["0vw", "0vw", "34vw", "34vw"]
  );

  // CHANGE THIS: the output values control how far mobile images separate.
  const topY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75, 1],
    ["0vh", "0vh", "-34vh", "-34vh"]
  );

  const bottomY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75, 1],
    ["0vh", "0vh", "34vh", "34vh"]
  );

  // Slightly straightens the images while scrolling
  const leftRotate = useTransform(
    scrollYProgress,
    [0.1, 0.75],
    [-4, -2]
  );

  const rightRotate = useTransform(
    scrollYProgress,
    [0.1, 0.75],
    [4, 2]
  );

  // Scale used for desktop images
  const desktopPictureScale = useTransform(
    scrollYProgress,
    [0.1, 0.75],
    [1, 0.94]
  );

  // Smaller scale used for tablet and mobile images
  const smallerPictureScale = useTransform(
    scrollYProgress,
    [0.1, 0.75],
    [1, 0.82]
  );

  // Fades the text in and keeps it visible
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0, 0, 1, 1]
  );

  // Makes the text grow to its normal size
  const textScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 1],
    [0.82, 0.82, 1, 1]
  );

  // Moves the text slightly upward while it appears
  const textY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 1],
    [30, 30, 0, 0]
  );

  // CHANGE THIS FIRST: replace the temporary image URL with your own.
  // The current images are decorative; add useful alt text if your image adds meaning.
  const leftImageUrl =
    "https://miro.medium.com/0*7VyEZgzwUhQMeBqb";
  
  const rightImageUrl = "https://cdn.arstechnica.net/wp-content/uploads/2026/01/super-programmer-hes-heating-up.jpg";

  // Classes shared by the desktop images
  const desktopImageClasses = `
    absolute
    h-[clamp(320px,56vh,560px)]
    w-[clamp(260px,32vw,520px)]
    rounded-2xl
    object-cover
    shadow-[0_35px_90px_rgba(0,0,0,0.32)]
  `;

  // Classes shared by the tablet and mobile images
  const smallerImageClasses = `
    absolute
    h-[clamp(130px,22vh,220px)]
    w-[min(82vw,520px)]
    rounded-2xl
    object-cover
    shadow-[0_25px_60px_rgba(0,0,0,0.4)]
  `;

  return (
    // CHANGE THIS height to control the scroll distance of the whole sequence.
    <section
      ref={sectionRef}
      className="relative h-[240vh] w-full"
    >
      {/* Sticky container that stays on the screen while scrolling */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Desktop layout container */}
        <div className="relative hidden h-full w-full items-center justify-center lg:flex">
          {/* Desktop text container */}
          <motion.div
            className="
              relative
              z-30
              w-[min(32vw,500px)]
              text-center
            "
            style={{
              opacity: textOpacity,
              scale: textScale,
              y: textY,
            }}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400">
              Hello, I&apos;m
            </p>

            <h2 className="text-[clamp(3rem,7vw,6rem)] font-bold">
              Rickson
            </h2>

            {/* CHANGE THIS COPY, then make the same edit in the mobile block below. */}
            <p className="mx-auto mt-5 max-w-lg leading-7 text-gray-400">
              A full-stack developer who learns by building. This portfolio highlights my work with React, Next.js, Motion, reusable components, and responsive animation patterns, while showing how I approach design, problem-solving, and clean code. The examples are also structured so other developers can inspect, adapt, and reuse the code in their own projects.
            </p>
          </motion.div>

          {/* Desktop image container */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
            {/* Left image */}
            <motion.img
              src={leftImageUrl}
              alt="left-image"
              aria-hidden="true"
              className={desktopImageClasses}
              style={{
                x: leftX,
                rotate: leftRotate,
                scale: desktopPictureScale,
              }}
            />

            {/* Right image */}
            <motion.img
              src={rightImageUrl}
              alt="right-image"
              aria-hidden="true"
              className={desktopImageClasses}
              style={{
                x: rightX,
                rotate: rightRotate,
                scale: desktopPictureScale,
              }}
            />
          </div>
        </div>

        {/* Tablet and mobile layout container */}
        <div className="relative flex h-full w-full items-center justify-center lg:hidden">
          {/* Tablet and mobile text container */}
          <motion.div
            className="
              relative
              z-30
              max-h-[48vh]
              w-[88vw]
              max-w-xl
              overflow-y-auto
              rounded-3xl
              border
              border-white/10
              bg-[#0e0f14]/95
              p-5
              text-center
              shadow-2xl
              sm:p-7
            "
            style={{
              opacity: textOpacity,
              scale: textScale,
              y: textY,
            }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              About the developer
            </p>

            <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold">
              Rickson Bozar
            </h2>

            {/* Keep this content in sync with the desktop copy above. */}
            <p className="mx-auto mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              A frontend developer focused on learning through hands-on
              projects. This portfolio explores Motion, reusable React
              component structure, and animation patterns that other
              developers can inspect and adapt.
            </p>
          </motion.div>

          {/* Tablet and mobile image container */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
            {/* Top image */}
            <motion.img
              src={leftImageUrl}
              alt="top-image"
              aria-hidden="true"
              className={smallerImageClasses}
              style={{
                y: topY,
                rotate: leftRotate,
                scale: smallerPictureScale,
              }}
            />

            {/* Bottom image */}
            <motion.img
              src={rightImageUrl}
              alt="bottom-image"
              aria-hidden="true"
              className={smallerImageClasses}
              style={{
                y: bottomY,
                rotate: rightRotate,
                scale: smallerPictureScale,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeparatingPicture;
