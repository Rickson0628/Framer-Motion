"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/**
 * COPY/PASTE NOTES
 * - Change h-[160vh] below to make the scroll sequence shorter or longer.
 * - Change the output values in cardLeft and cardRotate to redesign the movement.
 * - Keep every useTransform input range and output range the same length.
 * - Replace the heading, description, and card copy without changing the animation.
 */
const ScrollCard = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Tracks the scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // CHANGE THIS: 0.65 controls when the movement finishes (65% through the section).
  // Repeating 0 and 1 creates a short pause before and after the movement.
  const animationProgress = useTransform(
    scrollYProgress,
    [0, 0.05, 0.65, 1],
    [0, 0, 1, 1]
  );

  // The two output strings are the card's start and finish positions.
  // The 20rem value must match the maximum width on the motion.div below.
  const cardLeft = useTransform(
    animationProgress,
    [0, 1],
    [
      "calc(4% - min(0vw, 0rem))",
      "calc(96% - min(72vw, 20rem))",
    ]
  );

  // CHANGE THIS: add matching input/output values if you want more rotation beats.
  const cardRotate = useTransform(
    animationProgress,
    [0, 0.5, 1],
    [-3, 2, -1]
  );

  return (
    // CHANGE THIS: the section height provides the animation's scrolling distance.
    <section
      ref={sectionRef}
      className="relative h-[160vh] w-full"
    >
      {/* Sticky container that keeps the content on the screen */}
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-8 px-4 sm:gap-10">
        {/* Heading container */}
        <div className="flex w-full max-w-6xl items-end justify-between gap-5">
          {/* Main heading */}
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-blue-300">
              Vertical input · horizontal output
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Scroll to move the card
            </h3>
          </div>

          {/* Description beside the heading */}
          <p className="hidden max-w-56 text-right text-sm leading-6 text-white/45 sm:block">
            The animation remains tied directly to scroll progress.
          </p>
        </div>

        {/* Track container where the card moves */}
        <div className="relative h-[54vh] min-h-96 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#090d18]">
          {/* Background grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:40px_40px]"
          />

          {/* Start and finish labels */}
          <div className="absolute inset-x-6 top-6 flex justify-between font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/30">
            <span>Start</span>
            <span>Finish</span>
          </div>

          {/* CHANGE THIS width together with the 20rem value used in cardLeft. */}
          <motion.div
            className="absolute top-1/2 w-[min(72vw,20rem)]"
            style={{
              left: shouldReduceMotion
                ? "calc(4% - min(0vw, 0rem))"
                : cardLeft,
              rotate: shouldReduceMotion ? 0 : cardRotate,
            }}
          >
            {/* Centers the card vertically without affecting Motion transforms */}
            <div className="-translate-y-1/2">
              {/* Glow behind the card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 scale-110 rounded-[1.75rem] bg-blue-500/60 blur-2xl"
              />

              {/* Card content container */}
              <article className="relative flex min-h-56 flex-col justify-between rounded-[1.75rem] bg-blue-500 p-6 text-[#07101f] shadow-2xl sm:p-8">
                {/* Card label container */}
                <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.14em] text-black/50">
                  <span>Motion value</span>
                  <span>01</span>
                </div>

                {/* Card text container */}
                <div>
                  <h4 className="text-2xl font-bold tracking-[-0.04em]">
                    Scroll-linked card
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-black/65">
                    Movement stops exactly when scrolling stops—no
                    detached timeline.
                  </p>
                </div>
              </article>
            </div>
          </motion.div>

          {/* Progress bar container */}
          <div className="absolute inset-x-6 bottom-6 h-1 overflow-hidden rounded-full bg-white/10">
            {/* Progress bar fill */}
            <motion.div
              className="h-full origin-left rounded-full bg-blue-400"
              style={{
                scaleX: shouldReduceMotion
                  ? 0.15
                  : animationProgress,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollCard;
