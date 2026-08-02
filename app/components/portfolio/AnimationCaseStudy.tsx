import type { ReactNode } from "react";
import { repositoryUrl } from "./config";

/**
 * REUSABLE CASE-STUDY CONTAINER
 * Landing wraps each Motion component with this component. It creates:
 * 1. The animation number, title, and summary.
 * 2. The explanation card, tags, and direct GitHub source button.
 * 3. The dark demo stage where children renders the real animation.
 *
 * TAILWIND CSS QUICK KEY
 * - bg-* controls a background; text-* controls text size/color.
 * - p/px/py and m/mt-* control padding and margin; gap-* spaces children.
 * - grid/flex control layout; lg: changes layout on large screens.
 * - border-* and rounded-* create outlines and corner radius.
 * - white/10 means white at 10% opacity; larger numbers are more visible.
 */

type AnimationCaseStudyProps = {
  /** Unique page anchor used by navigation, such as animation-01. */
  id: string;
  /** Displayed after the word ANIMATION. */
  number: string;
  /** Large case-study heading. */
  title: string;
  /** Short description shown under the heading. */
  summary: string;
  /** Explanation shown inside the right-hand information card. */
  definition: string;
  /** Exact repository path appended to the GitHub URL. */
  sourcePath: string;
  /** Labels rendered as rounded technology pills. */
  tags: readonly string[];
  /** Inline color used for the small ANIMATION label. */
  accent: string;
  /** The actual imported Motion component displayed on the demo stage. */
  children: ReactNode;
};

// Small decorative arrow inside the source button.
// size-4 sets a 1rem box; currentColor inherits the link text color.
function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4">
      <path
        d="M3.5 8h9m-4-4 4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function AnimationCaseStudy({
  id,
  number,
  title,
  summary,
  definition,
  sourcePath,
  tags,
  accent,
  children,
}: AnimationCaseStudyProps) {
  // sourcePath comes from Landing and must match the repository file exactly.
  const githubUrl = `${repositoryUrl}/blob/main/${sourcePath}`;

  return (
    // OUTER STUDY SECTION
    // scroll-mt-16 stops anchor navigation below the 4rem fixed header.
    // border-t separates this study from the content before it.
    <section id={id} className="scroll-mt-16 border-t border-white/10">
      {/*
        INFORMATION CONTAINER
        section-shell supplies shared max width/side padding; py adds vertical space.
        It is one-column on small screens and title + 24rem side card on lg screens.
      */}
      <div className="section-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
        {/* LEFT COLUMN: animation number, title, and summary. */}
        <div>
          {/* Monospace label; accent from Landing supplies its text color. */}
          <p className="font-mono text-xs font-semibold tracking-[0.2em]" style={{ color: accent }}>
            ANIMATION {number}
          </p>
          {/* Main title: 5xl on mobile and 7xl from the sm breakpoint upward. */}
          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
            {title}
          </h2>
          {/* Muted supporting text constrained to 2xl width for readable lines. */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/58 sm:text-lg">
            {summary}
          </p>
        </div>

        {/*
          RIGHT INFORMATION CARD
          rounded creates corners, border adds the outline, and bg-white/[0.035]
          adds a very faint white background. p-5 adds inner spacing.
        */}
        <aside className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
          {/* Small muted uppercase label introducing the explanation. */}
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/38">
            Why it is here
          </p>
          {/* definition comes from this study's props in Landing. */}
          <p className="mt-3 text-sm leading-6 text-white/65">{definition}</p>
          {/* flex-wrap moves pills to a new line when the card runs out of space. */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white/45"
              >
                {tag}
              </span>
            ))}
          </div>
          {/*
            SOURCE BUTTON
            w-full fills the card; justify-between pushes text and arrow apart.
            bg-white/text-black adds contrast; hover scales it up slightly.
            focus-visible classes provide a keyboard-accessible outline.
          */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-between rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View component source
            <ArrowIcon />
          </a>
          {/* Visible path tells visitors exactly which source file the button opens. */}
          <p className="mt-3 break-all font-mono text-[0.62rem] leading-5 text-white/30">
            {sourcePath}
          </p>
        </aside>
      </div>

      {/*
        ANIMATION DEMO STAGE
        children is the real Motion component passed from Landing.
        bg-[#060606] is nearly black; border-y frames it above and below.
        Do not add overflow hidden/auto here: sticky demos need the page viewport.
      */}
      <div className="border-y border-white/10 bg-[#060606]">{children}</div>
    </section>
  );
}
