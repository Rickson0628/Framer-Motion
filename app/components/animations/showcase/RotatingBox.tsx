import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

/**
 * COPY/PASTE NOTES
 * - Change h-[180vh] below to make the pinned animation shorter or longer.
 * - Edit the output arrays to choose the scale, rotation, and color sequence.
 * - IMPORTANT: each useTransform input and output array must have the same length.
 * - The live value panel is optional; remove its state and event listeners if unneeded.
 */
const RotatingBox = () => {
  // These initial values match the first values in the output arrays below.
  // They are only used by the optional live value panel.
  const [y, setY] = useState(0);
  const [curScale, setCurScale] = useState(1);
  const [bg, setBg] = useState("#FF311A");
  const [curRotate, setCurRotate] = useState(-90);

  const sectionRef = useRef(null);

  // This maps 0 to the section's start and 1 to its end.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // CHANGE THIS: output values define the size at each input progress point.
  const scale = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 1.2, 1]
  );

  // CHANGE THIS: output values are degrees of rotation.
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [-90, 0, 90]
  );

  // CHANGE THIS: replace these colors or add a color with a matching input point.
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.9, 1],
    ["#FF311A", "#48FF1A", "#FF1AE0", "#1A6AFF"]
  );

  // Mirrors the MotionValues in React state for the live data display.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setY(latest);
  });

  useMotionValueEvent(scale, "change", (latest) => {
    setCurScale(latest);
  });

  useMotionValueEvent(rotate, "change", (latest) => {
    setCurRotate(latest);
  });

  useMotionValueEvent(backgroundColor, "change", (latest) => {
    setBg(latest);
  });

  return (
    // CHANGE THIS height to control how much scrolling drives the animation.
    <section ref={sectionRef} className="relative h-[180vh]">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

      {/* Keeps the animation visible while its parent section scrolls. */}
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-14 px-4 sm:gap-20">
        <h3 className="text-center text-4xl font-bold tracking-[-0.04em]">Rotating Box</h3>
        <div className="relative flex h-50 w-50 items-center justify-center">
          {/* Soft color glow behind the animated box */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute h-full w-full rounded-3xl opacity-50 blur-[70px]"
            style={{
              scale,
              backgroundColor,
            }}
          />

          <motion.div
            aria-hidden="true"
            className="h-50 w-50 rounded-3xl"
            style={{
              scale,
              rotate,
              backgroundColor,
            }}
          />
        </div>
        {/* OPTIONAL: delete this panel plus the state/listeners above for only the box. */}
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 font-mono text-xs text-white/65 shadow-2xl sm:text-sm">
          <div>Scroll: {y.toFixed(2)}</div>
          <div>Scale: {curScale.toFixed(2)}</div>
          <div>Rotate: {curRotate.toFixed(2)}°</div>
          <div>Color: {bg}</div>
        </div>
      </div>
    </section>
  );
};

export default RotatingBox;
