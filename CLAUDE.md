# CLAUDE.md

## Project Overview

Personal portfolio website for Daniel Holzmann (danielholzmann.com). A single-page CV/portfolio site showcasing professional experience, skills, and GitHub repositories.

## Tech Stack

- **Framework**: Gatsby v2.18 (React-based static site generator)
- **UI**: React 16, styled-components
- **Data**: GitHub GraphQL API for repository display
- **Deployment**: Netlify (see `_redirects`, `gatsby-plugin-netlify`)
- **Node version**: 16.14.0 (see `.nvmrc`)

## Commands

```bash
yarn develop    # Start dev server (localhost:8000)
yarn build      # Production build
yarn format     # Format code with Prettier
```

## Project Structure

```
src/
├── components/     # React components (styled-components)
│   ├── about/      # Bio section
│   ├── header/     # Site header
│   ├── hero/       # Hero banner with avatar
│   ├── layout/     # Page layout wrapper
│   ├── repositories/  # GitHub repos display
│   ├── skills/     # Skills progress bars
│   ├── timeline/   # Work history timeline
│   └── styles/     # Global styles, CSS reset
├── images/         # Source images (processed by gatsby-image)
├── pages/          # Gatsby pages (index.js, 404.js)
data/
└── siteConfig.js   # Site configuration (bio, skills, jobs, social links)
static/
├── favicon/        # Favicon assets
└── images/         # Static images (avatar, cover)
```

## Configuration

All site content is configured in `data/siteConfig.js`:
- `authorDescription`: Bio text (HTML supported)
- `skills`: Array of skill names and proficiency levels
- `jobs`: Work history for timeline
- `social`: Social media links

## Environment Variables

Requires `GITHUB_TOKEN` in `.env.development` / `.env.production` for GitHub API access.

## Developer Context

- Owner: Daniel Holzmann - full-stack developer with decades of experience
- Primary stack: React/Solid.js (frontend), Node.js/Rust (backend)
- Code style: Prettier configured (`.prettierrc`)
