"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * COPY/PASTE NOTES
 * - Change the two CardFace calls to replace the text and background colors.
 * - Keep perspective, preserve-3d, backfaceVisibility, and the back face's 180deg turn.
 * - Change the spring stiffness/damping to make the flip snappier or softer.
 * - Change w-[min(78vw,20rem)] and aspect-[4/5] to resize or reshape the card.
 */
// One shared face keeps the front and back markup consistent.
function CardFace({ label, title, description, className, style }) {
  // backfaceVisibility is required so the reverse side does not show through.
  return (
    <span
      className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] p-7 text-left shadow-2xl ${className}`}
      style={{ backfaceVisibility: "hidden", ...style }}
    >
      <span className="relative z-10 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.16em] text-black/45">
        <span>{label}</span>
        <span className="size-2 rounded-full bg-black/55" />
      </span>
      <span className="relative z-10">
        <span className="block text-3xl font-semibold tracking-[-0.05em]">{title}</span>
        <span className="mt-3 block text-sm leading-6 text-black/60">{description}</span>
      </span>
      <span
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 size-44 rounded-full border-[28px] border-black/10"
      />
    </span>
  );
}

export default function CardFlip() {
  // This single state value chooses which face the user sees.
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[78vh] flex-col items-center justify-center gap-9 overflow-hidden px-5 py-20">
      <div aria-hidden="true" className="visual-grid pointer-events-none absolute inset-0" />
      <div className="relative z-10 text-center">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#ffe45c]">
          Stateful 3D interaction
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Click the card to inspect both sides
        </h3>
      </div>

      {/* CHANGE THIS perspective value to strengthen or flatten the 3D effect. */}
      <div className="relative z-10 [perspective:1200px]">
        {/* The spring values below control whether the flip feels snappy or soft. */}
        <motion.button
          type="button"
          aria-pressed={isFlipped}
          aria-label={isFlipped ? "Show the front of the card" : "Show the back of the card"}
          className="relative aspect-[4/5] w-[min(78vw,20rem)] rounded-[2rem] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#ffe45c]"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: shouldReduceMotion ? 0 : isFlipped ? 180 : 0 }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
          transition={{ type: "spring", stiffness: 190, damping: 22 }}
          onClick={() => setIsFlipped((previous) => !previous)}
        >
          {/* The animated back face below starts at 180deg so it meets the front. */}
          {shouldReduceMotion ? (
            isFlipped ? (
              <CardFace
                label="Back · 02"
                title="State revealed"
                description="The same control now communicates its alternate state."
                className="bg-[#9f8cff] text-black"
              />
            ) : (
              <CardFace
                label="Front · 01"
                title="Flip the idea"
                description="A physical metaphor makes a two-state interaction immediately understandable."
                className="bg-[#ffe45c] text-black"
              />
            )
          ) : (
            <>
              <CardFace
                label="Front · 01"
                title="Flip the idea"
                description="A physical metaphor makes a two-state interaction immediately understandable."
                className="bg-[#ffe45c] text-black"
              />
              <CardFace
                label="Back · 02"
                title="State revealed"
                description="The same control now communicates its alternate state."
                className="bg-[#9f8cff] text-black"
                style={{ transform: "rotateY(180deg)" }}
              />
            </>
          )}
        </motion.button>
      </div>

      <p className="relative z-10 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/35">
        Current side · {isFlipped ? "back" : "front"}
      </p>
    </section>
  );
}
