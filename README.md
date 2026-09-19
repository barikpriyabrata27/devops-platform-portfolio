# Priyabrata Barik · DevOps & Platform Portfolio

Personal portfolio for a Senior DevOps & Platform Engineer with 14+ years of enterprise IT experience. This repository contains only the portfolio site; featured engineering projects remain in their own GitHub repositories.

## Stack

React, Vite, TypeScript, Tailwind CSS, Lucide React and GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run lint
npm run build
```

## Personal configuration

Update links and contact placeholders in `src/data/profile.ts`. Update featured repository links in `src/data/projects.ts`. For a repository project page, set `VITE_BASE_PATH` to the repository path when building, for example `/devops-platform-portfolio/`; user and organization Pages sites can use `/`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys automatically on pushes to `main`. In the repository settings, set Pages to use **GitHub Actions** as the source. The workflow uses Vite's `VITE_BASE_PATH` environment variable when supplied by the workflow or local build environment.

## Structure

- `src/App.tsx` - page composition and interactive navigation/theme behavior
- `src/index.css` - responsive visual system and reduced-motion support
- `src/data/` - centralized profile, skills, journey, principles and project content
- `public/` - static favicon and public assets
- `.github/workflows/` - GitHub Pages deployment