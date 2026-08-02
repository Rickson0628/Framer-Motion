"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

/**
 * COPY/PASTE NOTES
 * - Add, remove, or edit objects in cards; the JSX renders the list automatically.
 * - Change y and scale in hidden to control where each card enters from.
 * - Tune stiffness/damping for the spring feel and 0.14 for the stagger speed.
 * - If you show more than three cards, update md:grid-cols-3 for the layout you want.
 */
// CHANGE THIS: this is the content and accent color for every generated card.
const cards = [
  {
    number: "01",
    title: "Enter",
    description: "Each card begins lower, smaller, and transparent.",
    accent: "#63e7ff",
  },
  {
    number: "02",
    title: "Sequence",
    description: "The card index adds a short delay, creating a clear sequence.",
    accent: "#9f8cff",
  },
  {
    number: "03",
    title: "Settle",
    description: "A spring brings each card into place with a softer finish.",
    accent: "#ff8ac1",
  },
] as const;

const cardVariants: Variants = {
  // CHANGE THIS: the off-screen starting state for every card.
  hidden: {
    opacity: 0,
    y: 64,
    scale: 0.96,
  },
  // custom={index} below passes the card number here to create the stagger.
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: index * 0.14, // CHANGE THIS number to speed up or slow down the sequence.
    },
  }),
};

const RevealCard = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#63e7ff]">
              Staggered entrance
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              One variant, three moments
            </h3>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/45">
            Each card reuses the same animation while its index controls the delay.
          </p>
        </div>

        {/* viewport.once prevents replay; amount controls how much must be visible first. */}
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.li
              key={card.number}
              custom={index}
              variants={cardVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              className="group relative flex min-h-80 flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.035] p-7"
            >
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 size-52 rounded-full opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundColor: card.accent }}
              />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.18em] text-white/35">
                  {card.number}
                </span>
                <span className="size-2 rounded-full" style={{ backgroundColor: card.accent }} />
              </div>
              <div className="relative">
                <span className="mb-5 block h-px w-10" style={{ backgroundColor: card.accent }} />
                <h4 className="text-3xl font-semibold tracking-[-0.04em]">{card.title}</h4>
                <p className="mt-4 text-sm leading-6 text-white/50">{card.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RevealCard;
