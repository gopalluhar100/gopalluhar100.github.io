# Gopal Luhar — video portfolio

A responsive, static-exportable portfolio built with Next.js, React, Tailwind CSS, and Lenis. It uses the supplied introduction clip and portrait, and keeps the supplied resume available as a download.

## Requirements

- Node.js 20.9 or newer
- pnpm (recommended) or npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. The portfolio is designed to be previewed at desktop and mobile widths.

You can also use `pnpm install` and `pnpm dev`.

## Publish on GitHub Pages

The project is published under `https://gopalluhar100.github.io/video-portfolio/` while the existing homepage stays at the domain root. In a clone of `gopalluhar100/gopalluhar100.github.io`, edit the files inside `portfolio-source/`, then run from that folder in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/video-portfolio"
pnpm install --frozen-lockfile
pnpm build
pnpm publish:pages
```

The publish command copies the static export to the sibling `video-portfolio/` folder. Commit and push both folders from the repository root; GitHub Pages republishes the update from the `main` branch.

## Build

```bash
npm run build
```

The static site is written to `out/`. Serve that directory with any static HTTP server to preview the production export. Run `npm run assets` to recreate the optimized media from the original files.

## Supplied media

- `assets/source/intro-source.mp4` is the preserved source clip; `pnpm assets` copies it to the production media folder. The site plays it muted and loops until the visitor enables audio; audio playback runs the clip once.
- `assets/source/gopal-3d-source.png` is the preserved portrait; `pnpm assets` creates its responsive WebP derivative in `public/portrait/`.
- `public/resume/Gopal_Luhar_Resume_VA.pdf` is the latest resume supplied for this portfolio.

## Quality checks

The production build completed successfully. Lighthouse 12.8.2 scored the mobile export 91 for Performance and 100 for Accessibility. The page was also checked at 1440×900, 390×844, and 360×800; none showed horizontal overflow. The video controls and keyboard and touch profile-card interactions were verified in a browser. Screenshots are in `docs/qa/`.

## Profile links

- LinkedIn: https://www.linkedin.com/in/gopalluhar/
- GitHub: https://github.com/gopalluhar100
- Portfolio: https://gopalluhar100.github.io/
