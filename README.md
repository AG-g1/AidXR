# AidXR — VR Neurotherapy for Children

Marketing website for AidXR, a VR neurotherapy platform for children with ADHD, autism, and anxiety.

## Tech Stack

- **React 19** + **Vite 7** — fast dev/build tooling
- **Tailwind CSS 4** — utility-first styling via `@tailwindcss/vite` plugin
- **React Router 7** — client-side routing
- **Motion** (Framer Motion) — scroll-triggered reveals and animations
- **Google Fonts** — Fraunces (display serif) + Outfit (body sans-serif)

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:5175`.

## Project Structure

```
src/
├── main.jsx                  # App entry point
├── App.jsx                   # Router config (7 routes)
├── index.css                 # Theme variables, base styles, custom components
├── assets/
│   └── aidxr-logo.svg        # AidXR logo (extracted from aidxr.com)
├── components/
│   ├── Layout.jsx            # Navbar + Outlet + Footer, scroll-to-top
│   ├── Navbar.jsx            # Fixed header with AidXR logo + mobile menu
│   ├── Hero.jsx              # Homepage hero with neural canvas + video modal
│   ├── Footer.jsx            # CTA banner + link grid
│   └── Reveal.jsx            # Scroll-triggered animation wrapper
└── pages/
    ├── Home.jsx              # Landing page — skills, conditions, science, CTAs
    ├── PlatformPage.jsx      # VR + companion app, cognitive domains, how it works
    ├── SciencePage.jsx       # Evidence base, research by condition, FDA precedents
    ├── ConditionsPage.jsx    # ADHD (Live), Autism (Prototype), Anxiety (In Dev)
    ├── ParentsPage.jsx       # B2C — benefits, trust indicators
    ├── ClinicsPage.jsx       # B2B — CPT codes, revenue model
    └── TeamPage.jsx          # Advisory board recruitment

public/
├── Upgrade_VR_trailer_aidxr.mp4   # Demo video (AidXR-branded end card)
└── screenshots/                    # 11 VR gameplay screenshots from Steam

docs/
├── vr_neuropsychology_landscape_2025.md   # Full VR clinical landscape report
└── science-research/                       # Peer-reviewed research summaries
    ├── README.md                           # Overview and key statistics
    ├── adhd.md                             # VR for ADHD studies
    ├── autism.md                           # VR for Autism/ASD studies
    ├── anxiety.md                          # VR for Anxiety studies
    └── neurofeedback.md                    # VR + neurofeedback studies
```

## Styling Notes

All custom CSS in `index.css` must be inside `@layer base` or `@layer components`. Tailwind CSS 4 puts utilities in `@layer utilities` — unlayered CSS overrides all layered styles regardless of specificity. This means a bare `* { margin: 0 }` will break every Tailwind utility like `mx-auto`, `px-6`, `pt-32`, etc.

### Theme colors (defined in `@theme`)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#060B16` | Page background |
| `--color-surface` | `#0D1525` | Card backgrounds |
| `--color-lime` | `#84CC16` | Primary accent |
| `--color-teal` | `#2DD4BF` | Secondary accent (clinics) |
| `--color-text` | `#E8ECF4` | Primary text |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
