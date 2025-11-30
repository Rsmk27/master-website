# Deployment Guide

Your project is built with **Vite** and **React**. Here are the steps to deploy it to popular platforms.

## 1. Build the Project locally (Optional verification)
You can verify the build locally before deploying:
```bash
npm run build
```
This creates a `dist` folder with your production assets.

## 2. Deploy to Vercel (Recommended)
1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project root.
3.  Follow the prompts (accept defaults for Vite).
    *   **Output Directory:** `dist`

## 3. Deploy to Netlify
1.  Drag and drop the `dist` folder to the Netlify dashboard.
    *   *OR*
2.  Connect your GitHub repository.
3.  **Build Command:** `npm run build`
4.  **Publish Directory:** `dist`

## 4. Deploy to GitHub Pages
1.  Update `vite.config.js` with your base URL if needed (e.g., `base: '/repo-name/'`).
2.  Run `npm run build`.
3.  Push the contents of `dist` to a `gh-pages` branch.

## Pre-Deployment Checklist
- [x] **Build Check:** The project builds successfully without errors.
- [x] **Assets:** All images and icons are loading correctly.
- [x] **Links:** All project links in the Bento Grid are updated.
- [x] **Responsiveness:** The layout works on mobile and desktop.
