# Abizar Tsaqif Abrar — Portfolio

A personal portfolio site built with React, Vite, Tailwind CSS, and Framer Motion. Styled in a clean,
minimal "SaaS docs" aesthetic (white background, dark text, blue accent) inspired by Vercel, Linear, and
Stripe Docs.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/        # All reusable UI components, one per section
    Navbar.jsx
    Hero.jsx
    About.jsx
    Education.jsx
    Experience.jsx
    Projects.jsx
    ProjectCard.jsx
    Skills.jsx
    SkillBadge.jsx
    Organizations.jsx
    Certifications.jsx
    CertificateCard.jsx
    TimelineItem.jsx
    Contact.jsx
    Footer.jsx
  data.js            # All editable content lives here (single source of truth)
  App.jsx
  main.jsx
  index.css
```

## Customizing content

Almost everything you'd want to change lives in **`src/data.js`** — names, bio, stats, education,
experience, projects, skills, organizations, certifications, and contact info. Components just render
whatever is in that file, so you rarely need to touch component code to update content.

### Things to replace

- `profile.avatarUrl` — path to your profile photo (drop the image in `public/` and reference it,
  e.g. `/avatar.jpg`).
- `profile.resumeUrl` — path to your resume PDF (e.g. `/resume.pdf` placed in `public/`).
- `profile.github` — your GitHub profile URL.
- `projects` array — replace the placeholder project objects with real ones (`image`, `github`, `demo`).
  Duplicate an object to add more project cards.
- `certifications` array — replace `title`, `issuer`, `date`, `image`, and `url` for each certificate.
  Two entries are left empty as ready-to-fill templates; add more by duplicating an object.

Buttons (GitHub, Live Demo, View Credential, Download CV) automatically disable themselves when a URL
isn't provided, so the site never ships broken links.

## Tech stack

- **React 18** + **Vite** for fast dev/build tooling
- **Tailwind CSS** for styling, with design tokens defined in `tailwind.config.js`
- **Framer Motion** for subtle scroll/hover animations
- **lucide-react** for icons
- **Inter** (via Google Fonts) for typography

## Notes

- Color tokens (`primary`, `ink`, `muted`, `line`, `surface`, `subtle`) are defined once in
  `tailwind.config.js` — change them there to re-theme the whole site.
- Animations respect `prefers-reduced-motion`.
- Fully responsive from mobile to desktop.
