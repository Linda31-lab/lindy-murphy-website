# Lindy Murphy

Personal site for [lindymurphy.com](https://lindymurphy.com) — enterprise organic discovery, with practical AI enablement.

This repo is a Next.js copy of the live site so it can be edited here and published back to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Edit the content

Most copy lives in `lib/content.ts` (experience, expertise, toolkit, contact details). Layout and sections are in `app/page.tsx`. Photos are in `public/`.

The contact form opens your email app to `lindymurphy3@gmail.com`.

## Git

Source of truth: [github.com/Linda31-lab/lindy-murphy-website](https://github.com/Linda31-lab/lindy-murphy-website).

```bash
git remote add github https://github.com/Linda31-lab/lindy-murphy-website.git
git push -u github main
```

Point the Vercel project for lindymurphy.com at that GitHub repo so production deploys follow `main`.
