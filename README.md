# Lindy Murphy

Personal site for [lindymurphy.com](https://lindymurphy.com): enterprise organic discovery, with practical AI enablement.

This public repo is the website. Vercel deploys `main` to the live domain. If you are looking at the GitHub repo to understand how I work, start with [`docs/seo.md`](docs/seo.md).

## For people reviewing this repo

The interesting SEO is in the implementation, not in a long essay:

- Title, description, and canonical: `app/layout.tsx` + `lib/content.ts`
- robots and sitemap: `app/robots.ts`, `app/sitemap.ts`
- Person / WebSite JSON-LD: `components/json-ld.tsx`
- How I think about this site: [`docs/seo.md`](docs/seo.md)
- Launch checklist I actually use: [`docs/launch-checklist.md`](docs/launch-checklist.md)
- Search Console steps: [`docs/search-console.md`](docs/search-console.md)

Reusable audit templates and snippets that are not specific to this site belong in a separate repo. This one stays the production website.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Edit the content

Most copy lives in `lib/content.ts` (experience, expertise, toolkit, contact details). Layout and sections are in `app/page.tsx`. Photos are in `public/`.

The contact form opens your email app to `lindymurphy3@gmail.com`.
