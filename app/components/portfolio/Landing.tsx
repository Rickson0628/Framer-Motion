"use client";

// Curated animations displayed as portfolio case studies.
// Keep direct imports so every source file remains easy to find and copy.
import Album from "../animations/showcase/Album";
import CardFlip from "../animations/showcase/CardFlip";
import RevealCard from "../animations/showcase/RevealCard";
import RotatingBox from "../animations/showcase/RotatingBox";
import ScrollCard from "../animations/showcase/ScrollCard";
import SeparatingPicture from "../animations/showcase/SeparatingPicture";
import AnimationCaseStudy from "./AnimationCaseStudy";
import { repositoryUrl } from "./config";

/**
 * PORTFOLIO PAGE CONTAINER
 * This component assembles the navigation, hero, every animation case study,
 * and the footer. The actual animation code stays in the imported components.
 *
 * TAILWIND CSS QUICK KEY
 * - bg-* = background color; text-* = text color or font size depending on the value.
 * - px/py/p-* = padding; mt/gap-* = margin or space between children.
 * - w/h/size/max-w/min-h-* = width, height, or size limits.
 * - flex/grid = layout; items-* and justify-* = alignment.
 * - border-* = border color/width; rounded-* = corner radius.
 * - fixed/absolute/relative/sticky = positioning; z-* = layer order.
 * - sm:/md:/lg: applies a class from that screen width upward.
 * - A color such as bg-white/10 uses /10 as 10% opacity.
 */

// Decorative GitHub logo used by the header's Source button.
// size-4 makes it 1rem square; currentColor inherits the button's text color.
function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="currentColor">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.24c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.58-.29-5.29-1.29-5.29-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.4-2.72 5.38-5.3 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export default function Landing() {
  return (
    // PAGE ROOT: dark background and warm default text color for everything inside.
    // Keep overflow-x-clip: it prevents horizontal spill without breaking sticky children.
    <main className="overflow-x-clip bg-[#08090d] text-[#f4f1e8]">
      {/*
        FIXED HEADER
        fixed/inset-x-0/top-0 pins it across the top; z-50 keeps it above animations.
        bg-[#08090d]/80 is translucent and backdrop-blur-xl blurs content behind it.
        border-b adds the faint divider line at the bottom.
      */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#08090d]/80 backdrop-blur-xl">
        {/* section-shell supplies the shared max width and side padding from globals.css. */}
        {/* flex places the brand, navigation, and Source button in one horizontal row. */}
        <div className="section-shell flex h-16 items-center justify-between gap-5">
          {/* Brand link: clicking it returns the visitor to the hero section. */}
          <a href="#top" className="flex items-center gap-3">
            {/* Orange initials badge: bg is background; text-black is text color. */}
            <span className="flex size-7 items-center justify-center rounded-full bg-[#ff6846] text-[0.64rem] font-bold text-black">
              RB
            </span>
            {/* Small uppercase brand text; tracking controls space between letters. */}
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-white/75">
              Motion studies
            </span>
          </a>
          {/* Hidden on mobile; sm:flex shows navigation at the small breakpoint upward. */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 sm:flex">
            <a className="nav-link" href="#animation-01">Work</a>
            <a className="nav-link" href={repositoryUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
          {/* button-secondary is from globals.css; px/py adjust its padding. */}
          <a href={repositoryUrl} target="_blank" rel="noreferrer" className="button-secondary px-4 py-2.5">
            <GitHubIcon />
            {/* Hide the word on narrow screens while keeping the GitHub icon visible. */}
            <span className="hidden sm:inline">Source</span>
          </a>
        </div>
      </header>

      {/*
        HERO CONTAINER
        min-h-screen fills at least one viewport; pt-16 makes room for the fixed header.
        relative contains the absolute grid/glow decorations.
        overflow-hidden clips hero decorations, not the later sticky demos.
      */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
        {/* Decorative grid from globals.css; pointer-events-none ignores pointer input. */}
        <div aria-hidden="true" className="visual-grid pointer-events-none absolute inset-0" />
        {/* Orange blurred circle: position, size, background/opacity, then blur amount. */}
        <div className="pointer-events-none absolute -left-48 top-20 size-[34rem] rounded-full bg-[#ff6846]/10 blur-[130px]" />
        {/* Hero width container; relative keeps text above absolute decorations. */}
        <div className="section-shell relative py-24">
          {/* Green eyebrow: monospace, extra-small, uppercase, widely spaced text. */}
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c9ff63]">
            Rickson Bozar · Frontend motion
          </p>
          {/* clamp() makes the heading fluid from 4.2rem to 9rem by viewport width. */}
          <h1 className="mt-7 max-w-6xl text-[clamp(4.2rem,11vw,9rem)] font-semibold leading-[0.83] tracking-[-0.075em]">
            {/* This span changes only these words to the orange accent color. */}
            Motion studies, shown as <span className="text-[#ff6846]">working code.</span>
          </h1>
          {/*
            INTRO ROW
            One column by default; text + auto-width button at md screens.
            border-t creates the divider; mt/pt add space outside/inside it.
          */}
          <div className="mt-10 grid max-w-5xl gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            {/* Muted paragraph: white/58 is translucent white; leading is line height. */}
            <p className="max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              Six selected experiments from my Motion practice. Each study demonstrates a distinct, reusable interaction technique and links directly to its implementation.
            </p>
            {/* button-primary is in globals.css; w-fit prevents a full-width button. */}
            <a href="#animation-01" className="button-primary w-fit">
              View selected work
            </a>
          </div>
        </div>
      </section>

      {/*
        CASE-STUDY CONTAINER
        AnimationCaseStudy creates the title/description/source panel and demo background.
        The imported animation between its tags becomes the children/demo content.

        COPY THIS WHOLE BLOCK to add another animation.
        Give id/number unique values, import the component above, and render it as children.
        sourcePath must exactly match the file in GitHub, including capitalization/extension.
        accent changes the small ANIMATION label color for this case study.
      */}
      <AnimationCaseStudy
        id="animation-01"
        number="01"
        title="Separating Picture"
        summary="One image becomes a responsive, scroll-directed composition with different choreography for desktop, tablet, and mobile."
        definition="The strongest study in the project: it combines viewport-aware behavior, several mapped motion values, layered imagery, and a complete narrative reveal."
        sourcePath="app/components/animations/showcase/SeparatingPicture.tsx"
        tags={["useScroll", "useTransform", "responsive"]}
        accent="#ff6846"
      >
        <SeparatingPicture />
      </AnimationCaseStudy>

      {/* STUDY 02: the same container receives RotatingBox as its demo children. */}
      <AnimationCaseStudy
        id="animation-02"
        number="02"
        title="Rotating Box"
        summary="A single scroll value controls rotation, scale, and color while the interface exposes those values in real time."
        definition="This earns its place because the animation makes the relationship between input and output visible—a useful demonstration of MotionValue composition."
        sourcePath="app/components/animations/showcase/RotatingBox.tsx"
        tags={["MotionValue", "scroll mapping", "color"]}
        accent="#c9ff63"
      >
        <RotatingBox />
      </AnimationCaseStudy>

      {/* STUDY 03: sourcePath creates this study's direct GitHub source link. */}
      <AnimationCaseStudy
        id="animation-03"
        number="03"
        title="Scroll Card"
        summary="Vertical page progress becomes horizontal movement inside a responsive track, with no independent animation timeline."
        definition="This study demonstrates direct input mapping: the card, rotation, and progress indicator all remain synchronized with the user's scroll position."
        sourcePath="app/components/animations/showcase/ScrollCard.tsx"
        tags={["useScroll", "responsive", "progress"]}
        accent="#5ca9ff"
      >
        <ScrollCard />
      </AnimationCaseStudy>

      {/* STUDY 04: tags become the rounded technology pills in the side panel. */}
      <AnimationCaseStudy
        id="animation-04"
        number="04"
        title="Reveal Cards"
        summary="A viewport-triggered sequence gives three related ideas a readable entrance without turning them into separate animations."
        definition="The component uses one reusable variant with custom indices, spring settling, reduced-motion support, and a responsive grid."
        sourcePath="app/components/animations/showcase/RevealCard.tsx"
        tags={["whileInView", "variants", "stagger"]}
        accent="#63e7ff"
      >
        <RevealCard />
      </AnimationCaseStudy>

      {/* STUDY 05: section-shell centers and pads this smaller Album demo. */}
      <AnimationCaseStudy
        id="animation-05"
        number="05"
        title="Animated Album"
        summary="A compact interaction system combining parent-child variants, staggered entrances, and hover-driven image treatment."
        definition="The album demonstrates reusable orchestration rather than one isolated effect: state controls the group, while each card owns its entrance and hover behavior."
        sourcePath="app/components/animations/showcase/Album.tsx"
        tags={["variants", "stagger", "hover"]}
        accent="#9f8cff"
      >
        <div className="section-shell py-16 sm:py-24">
          <Album />
        </div>
      </AnimationCaseStudy>

      {/* STUDY 06: CardFlip is direct because it owns its internal spacing. */}
      <AnimationCaseStudy
        id="animation-06"
        number="06"
        title="Card Flip"
        summary="A two-state interface uses perspective and spring rotation to make the change feel physical and immediately understandable."
        definition="This interaction earns its place through genuine front-and-back geometry, keyboard accessibility, visible state, and a reduced-motion fallback."
        sourcePath="app/components/animations/showcase/CardFlip.jsx"
        tags={["3D", "spring", "accessible state"]}
        accent="#ffe45c"
      >
        <CardFlip />
      </AnimationCaseStudy>

      {/*
        FOOTER
        Stacks on mobile and becomes a spaced horizontal row at sm screens.
        text-white/45 is muted; hover:text-white brightens the repository link.
      */}
      <footer className="section-shell flex flex-col gap-5 py-12 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>Built by Rickson Bozar with Next.js, React, and Motion.</p>
        <a className="transition-colors hover:text-white" href={repositoryUrl} target="_blank" rel="noreferrer">
          View the complete repository ↗
        </a>
      </footer>
    </main>
  );
}
