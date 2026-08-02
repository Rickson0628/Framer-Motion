# Motion Studies

[View the live project](https://motion-wine-alpha.vercel.app/)

Motion Studies is a frontend animation portfolio built with Motion, React, and Next.js. Six curated experiments form the main showcase, with direct source links that make every implementation easy to inspect, adapt, and reuse.

## Highlights

- Six curated studies displayed through their real working components
- Scroll-linked motion, transforms, variants, springs, hover states, and 3D rotation
- Direct GitHub links to every showcased component
- Responsive layouts for mobile, tablet, and desktop
- `prefers-reduced-motion` support and keyboard-friendly controls
- Separate `showcase` and `experiments` folders for clear navigation

## Selected animation studies

The main portfolio presents six selected animations:

1. **Separating Picture** — two images separate to reveal a responsive profile section
2. **Rotating Box** — one scroll value controls scale, rotation, and color
3. **Scroll Card** — vertical progress maps directly to horizontal movement
4. **Reveal Cards** — one shared variant creates a staggered three-card sequence
5. **Animated Album** — parent-child variants reveal an interactive image grid
6. **Card Flip** — an accessible two-sided interaction with a spring-based 3D transition

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

## Development approach

1. Build each interaction as a focused, independent component.
2. Test behavior across scrolling, clicking, hovering, and responsive layouts.
3. Move the strongest studies into the showcase while continuing to refine the experiments.

Every animation remains independent, making the code easy to find, understand, customize, and reuse.
