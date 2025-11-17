# AI Agent Instructions for Portfolio Website

## Project Overview
This is a personal portfolio website built with HTML, TailwindCSS, and vanilla JavaScript. The site features a cybersecurity/hacker theme with matrix-style animations and interactive elements.

## Key Components & Architecture

### Visual Effects
- Matrix rain animation (`matrix.js`) - Core background effect
- Particle system (`script.js`) - Secondary interactive background
- Custom cursor animations and floating shapes
- Typewriter effects and cyber-style popups

### Core Features
1. Responsive navigation with smooth scrolling
2. Dynamic typing animation for role descriptions
3. Rotating cyber quotes/facts
4. Contact form with custom animations and sound effects
5. Terminal-style form inputs
6. Custom scrolling timeline for experience section

## Important Files
- `main.html` - Main structure and content
- `styles.css` - Custom styling and animations
- `matrix.js` - Matrix rain background implementation
- `script.js` - Core functionality and interactions

## Key Patterns & Conventions

### CSS
- Custom variables for hacker theme colors in `:root`
- Consistent animation naming (`animate-*` classes)
- Card styling with `card-hover` class pattern
- Responsive design breakpoints using Tailwind defaults

### JavaScript
## AI Agent Instructions — Static Portfolio (concise)

Purpose: help an AI code agent be immediately productive editing, testing, and extending this static portfolio site.

Overview
- This repository is a single-page, static portfolio composed of `index.html`, `styles.css`, `matrix.js`, and `script.js`.
- Visual effects and interactivity are client-side only. There is no build step — Tailwind is included via CDN in `index.html`.

Key files (start here)
- `index.html` — the full page markup and entrypoint. Modify HTML structure and Tailwind utility classes here.
- `styles.css` — custom CSS for theme, animations, and visual components (profile card, terminal, cards).
- `matrix.js` — lightweight matrix rain canvas implementation (density, font-size, DPR handling).
- `script.js` — main UI behavior: typing animation, rotating quotes, particle config, contact form submission, interactive terminal, card tilt, sticky nav.
- `img/` — media assets (certificates under `img/certi`).

Project-specific conventions & patterns
- Visual-first: keep the hacker/cyber aesthetic (green palette). Color variables live in `:root` in `styles.css` (`--hacker-bright`, `--hacker-medium`, etc.).
- Tailwind + handcrafted CSS: prefer small layout changes via Tailwind classes in `index.html`; add cross-cutting animations or complex selectors in `styles.css`.
- IIFE JS modules: scripts wrap behavior in IIFEs and initialize on `DOMContentLoaded`.
- Terminal interaction: the in-page terminal reads commands in `script.js` (`help, whoami, projects, contact, clear, send`). Use `submitContact` to programmatically send messages.

Integration & external dependencies
- Tailwind via CDN: `https://cdn.tailwindcss.com` (no local build).
- Particles: `particles.js` / `tsparticles` loaded via CDN; note `styles.css` sets `#particles-js, #tsparticles { display: none; }` — particle layer is present but hidden by default.
- Contact form: HTML form uses Formspree action (`https://formspree.io/f/myzlyrgv`) and `script.js` submits JSON to that URL. Inspect network requests when debugging.

Developer workflows & debugging
- Local preview: open `index.html` in a browser or run a simple static server:
	- `python3 -m http.server 8000` (from repo root)
	- or `npx http-server -c-1` to disable caching.
- Live debugging: open DevTools → Console & Network. Pay attention to:
	- matrix canvas sizing on resize (matrix.js handles DPR and debounces resize)
	- contact POST to Formspree (JSON payload; check CORS and response body)
	- terminal command errors (they are printed to `#terminal-output`).
- CI: there's a workflow at `.github/workflows/static.yml` (deploy-related). Edit only if you need to change deployment behavior.

Safe change recommendations for AI agents
- Small content edits: update text in `index.html` and `script.js` arrays (typing texts, `cyberQuotes`, `projects`).
- Visual tweaks: prefer adding classes in `index.html` first; for animations or new components, add CSS to `styles.css` near similar blocks (e.g., put new card styles near `collab-card`).
- Matrix tuning: edit `matrix.js` — change `fontSize`, `chars`, or drop speed via `drops[i].speed`. Keep DPR scaling logic intact.
- Contact form fixes: `script.js` already sends JSON to Formspree; if you change the form `action`, update the JS `contact-form` action lookup (it reads `this.action` on submit and uses `submitContact`).

Examples (concrete)
- Add a new project card: modify the `#projects` grid in `index.html`, use `card-hover` + Tailwind classes; add link and icon following existing project entries.
- Change typing-replace list: open `script.js`, edit `texts` array near the top to add/remove role strings.
- Make matrix sparser on mobile: in `matrix.js` reduce `columns` or increase `fontSize` when `width < 700`.

What NOT to change
- Do not remove DPR scaling in `matrix.js` (canvas scaling relies on it).
- Do not remove the `contact-form` JSON handling unless also replacing server endpoint and testing network behavior.
- Avoid inlining large assets; keep images in `img/` and reference them from `index.html`.

If something is missing
- Ask for the desired change and whether visual style must remain identical (theme is central).
- If you need a local mock for Formspree, I can add a brief Node/Python mock endpoint and instructions.

Next step: I can apply this merged file and iterate — tell me if you want more examples or CI/deploy details.
