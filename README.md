# realworld-David-Uko

## Overview
- This repository contains a Next.js app (`realworld-portal`) that clones `https://therealworld.net/` with two modes:
  - `Live clone` at `/clone`: fetches the live HTML for full visual and functional parity.
  - `Local mirror` at `/site`: serves your exported `index.html` and local assets for offline use.

## Prerequisites
- Node.js 18+ and npm
- Git
- Windows PowerShell or any terminal

## Quick Start (Development)
- Navigate to the app and install dependencies:
  - `cd realworld-portal`
  - `npm install`
- Start the dev server:
  - `npm run dev`
- Open in browser:
  - `http://localhost:3000/` (redirects to `/clone`)
  - or `http://localhost:3000/clone` directly

## Local Mirror Mode
- Use when you want to run purely from local files:
  - `http://localhost:3000/site`
- If assets 404, copy required files into `realworld-portal/public/` using the mapping below.

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm start`
- Lint: `npm run lint`

## Production
- Build and run:
  - `cd realworld-portal`
  - `npm run build`
  - `npm start`
- Open:
  - `http://localhost:3000/clone` (live clone)
  - `http://localhost:3000/site` (local mirror)

## Asset Mapping (Local Mirror)
- External → Local path base under `realworld-portal/public/`:
  - `https://framerusercontent.com` → `/framerusercontent.com`
  - `https://framer.com` → `/framer.com`
  - `https://app.framerstatic.com` → `/app.framerstatic.com`
  - `https://fonts.gstatic.com` → `/fonts.gstatic.com`
  - `//code.tidio.co` → `/code.tidio.co`
  - `https://player.vimeo.com` → `/player.vimeo.com`
  - `https://i.vimeocdn.com` → `/i.vimeocdn.com`
  - `https://f.vimeocdn.com` → `/f.vimeocdn.com`

## Troubleshooting
- White page in `/clone`:
  - Disable aggressive privacy/ad blocking; hard refresh.
  - DevTools → Network: confirm `GET /clone` returns 200 and HTML content.
- White page in `/site`:
  - DevTools → Network: find 404s under local asset paths and add missing files into `public/`.
- Port busy:
  - `npm run dev -- --port 3001` and open `http://localhost:3001/clone`.
- Build errors:
  - `npm run lint` and fix issues; ensure Node.js 18+.

## Project Structure
- `realworld-portal/app/page.tsx`: redirects `/` to `/clone`
- `realworld-portal/app/clone/route.ts`: serves live HTML from `therealworld.net`
- `realworld-portal/app/site/route.ts`: serves local `index.html` with URL rewrites
- `realworld-portal/app/layout.tsx`: metadata and viewport
