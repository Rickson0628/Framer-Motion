# Kinetic — Motion UI Engineering Lab

Kinetic is an interactive frontend portfolio focused on one question: how can motion make a digital product easier to understand and more satisfying to use?

The experience combines spring physics, staggered transitions, drag gestures, scroll-linked storytelling, responsive composition, and reduced-motion support in one cohesive case study.

## Highlights

- Six curated animation case studies imported directly into the portfolio
- Scroll-linked transformations, responsive choreography, and staggered variants
- Responsive layout across mobile, tablet, and desktop
- `prefers-reduced-motion` support in both React and CSS
- Keyboard-visible focus states and semantic controls
- Recruiter-friendly project narrative, process, and source-code access
- Direct GitHub source links for every showcased component
- Optimized Geist fonts and production metadata through Next.js

## Selected animation studies

The portfolio intentionally presents only the strongest current studies:

1. **Separating Picture** — responsive scroll choreography and layered transforms
2. **Rotating Box** — one scroll value mapped to scale, rotation, and color
3. **Scroll Card** — vertical progress mapped into responsive horizontal movement
4. **Reveal Cards** — viewport-triggered variants and staggered entrances
5. **Animated Album** — variants, staggered children, and hover states
6. **Card Flip** — accessible state communicated through a spring-based 3D interaction

The six curated studies live in `app/components/animations/showcase`. Smaller practice exercises stay in `app/components/animations/experiments` without being presented as portfolio work.

## Stack

- Next.js 16 App Router
- React 19
- Motion 12
- TypeScript
- Tailwind CSS 4
- React Compiler

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Reuse an animation

Every file in `app/components/animations` is an independent Motion component that can be copied into another React or Next.js project. Use `showcase` for the polished portfolio studies and `experiments` for the smaller practice components.

1. Copy the component file from `app/components/animations/showcase` or `app/components/animations/experiments`.
2. Install Motion with `npm install motion` if the destination project does not have it.
3. Import and render the component; keep its `"use client"` line in a Next.js App Router project.
4. Search the component for `MOTION COPY/PASTE COMPONENT`, `COPY/PASTE NOTES`, and `CHANGE THIS` to find its content and tuning controls.
5. When editing `useTransform`, keep the input and output arrays the same length.
6. For sticky scroll studies, do not place the component inside an `overflow: hidden`, `auto`, or `scroll` ancestor. Use `overflow-x: clip` when you only need to stop horizontal spill.

Example:

```tsx
import ScrollCard from "./components/animations/showcase/ScrollCard";

export default function Page() {
  return <ScrollCard />;
}
```

To reuse the complete portfolio, change `repositoryUrl` once in `app/components/portfolio/config.ts`. Each `sourcePath` in `Landing.tsx` must exactly match its GitHub file path.

## Quality checks

```bash
npm run lint
npm run build
```

## Project structure

```text
app/
├── components/
│   ├── animations/
│   │   ├── showcase/    # Six curated animations used by the portfolio
│   │   └── experiments/ # Smaller Motion practice components
│   └── portfolio/       # Landing page, case-study wrapper, and link config
├── globals.css      # Design tokens, shared UI classes, accessibility fallbacks
├── layout.tsx       # Font setup and portfolio metadata
└── page.tsx         # Clean route entry that imports the portfolio
```

## Design approach

1. **Observe** — identify the state change and the information that deserves attention.
2. **Choreograph** — map entrance, emphasis, and exit into a readable sequence.
3. **Tune** — test spring behavior, interruption, responsive constraints, and motion preferences.

The animation files remain independent inside `showcase` and `experiments`, making each study easy to find, copy, reuse, and evolve.
