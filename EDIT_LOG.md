# Edit Log

Running record of every change made to this project by Claude. Newest entries at
the top. This file is documentation only — nothing here is read by the website
or by Vercel.

---

## 2026-07-06 (2)

**Converted the site from a single static HTML file to a multi-page Next.js project**, so projects can each get their own URL/page (e.g. `/projects/project-one`) instead of living on one scrolling page.

- Removed `index.html` — fully superseded by the Next.js structure below.
- Added `package.json`, `next.config.js`, `jsconfig.json`, `.gitignore`, `.eslintrc.json` — standard Next.js (App Router) project scaffolding. `jsconfig.json` enables `@/` imports (e.g. `@/components/Nav`) instead of relative paths.
- Added [`data/projects.js`](./data/projects.js) — **the single file you edit to add/remove/change projects.** Each project is one object (slug, title, summary, full description, image, tags, GitHub/demo links). Both the projects list page and every individual project page read from this array automatically.
- Added `components/Nav.js`, `components/Footer.js`, `components/ProjectCard.js` — shared UI pieces used across every page.
- Added `app/layout.js` + `app/globals.css` — the shared page shell (nav + footer on every page) and the site-wide theme/styles (same CSS variable approach as the old file, so re-coloring still works from one place).
- Added `app/page.js` — the home page (hero, about, a featured-projects preview, skills, contact).
- Added `app/projects/page.js` — lists every project as a clickable card.
- Added `app/projects/[slug]/page.js` — the dynamic route that renders an individual project's detail page based on its slug in `data/projects.js`. You do not need to add new files here when you add a project; this one file handles all of them.
- Added `public/images/README.md` — placeholder explaining where to drop real images (git doesn't track empty folders, hence the placeholder file).

### To run this locally
1. Install [Node.js](https://nodejs.org/) if you don't have it.
2. In this folder, run `npm install` (one-time, downloads dependencies into `node_modules/`, which is gitignored).
3. Run `npm run dev` and open `http://localhost:3000`.

### Not yet done (left for you)
- Add your real projects to `data/projects.js` (copy/edit the example objects).
- Replace placeholder text/links in `app/page.js` (name, bio, skills, contact links).
- Add real images to `public/images/` and update the `image` paths in `data/projects.js` (and the photo in `app/page.js`'s About section).
- Optionally add a `public/resume.pdf` (the Resume button in the hero already links to `/resume.pdf`).
- Push to GitHub, then import the repo in Vercel — it auto-detects Next.js, no config needed.

## 2026-07-06 (1)

**Created project from scratch.**

- Added [`index.html`](./index.html) — the entire portfolio site in one file
  (HTML structure, CSS styling, and a few lines of JS), so it can be deployed
  to Vercel with zero configuration (no `package.json`, no build step needed).
- Site sections: sticky nav bar (with mobile hamburger menu) → hero/intro →
  about → projects (3 placeholder cards) → skills → contact → footer.
- All placeholder content (name, bio, project details, links, images) is
  marked with `EDIT ME` or `IMAGES` comments directly in the HTML — search
  the file for those tags to find every spot that needs personalization.
- Colors are controlled by CSS variables at the top of the `<style>` block
  (`:root { --color-bg: ...; --color-accent: ...; }`) so the whole theme can
  be re-colored from one place.
- Created this file, `EDIT_LOG.md`, to track future changes.

### Not yet done (left for you)
- Replace all placeholder text/links with real content.
- Add a real profile photo and project screenshots (create an `images/`
  folder next to `index.html` — see the `IMAGES` comments in the file for
  exact instructions).
- Optionally add a `resume.pdf` file to this folder (the "Resume" button in
  the hero section already links to `resume.pdf`).
- Initialize git and push to GitHub, then import the repo in Vercel
  (Vercel auto-detects a static `index.html` — no framework preset needed).
