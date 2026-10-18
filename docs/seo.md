# How this site is set up for search

This is the implementation record for [lindymurphy.com](https://lindymurphy.com). It is meant for me, for future edits, and for anyone reviewing this repo who wants to see how I handle a small site.

The live site is the source of truth for content. This file is the source of truth for search decisions.

## What I optimized for

This is a one-page personal site. The job is not to rank for hundreds of keywords. The job is:

1. Be findable as **Lindy Murphy** and for organic discovery / enterprise SEO leadership.
2. Make it easy for Google, people, and AI assistants to understand who I am and what I do.
3. Keep metadata, copy, and structured data in one place so they cannot drift.

## Where the SEO lives in code

| Need | File |
| --- | --- |
| Title, meta description, canonical, robots | `app/layout.tsx`, `lib/content.ts` |
| `robots.txt` | `app/robots.ts` → https://lindymurphy.com/robots.txt |
| XML sitemap | `app/sitemap.ts` → https://lindymurphy.com/sitemap.xml |
| Person and WebSite JSON-LD | `components/json-ld.tsx` |
| Visible copy | `lib/content.ts`, `app/page.tsx` |
| Search Console verification | `lib/content.ts` (`googleSiteVerification`) or `GOOGLE_SITE_VERIFICATION` |
| Launch steps | `docs/launch-checklist.md` |
| Search Console property setup | `docs/search-console.md` |

Edit copy in `lib/content.ts` first. Title and description used in Google are the same strings as the HTML `<title>` and meta description.

## Decisions on this site

**URL.** Canonical host is `https://lindymurphy.com` (HTTPS, no `www`). The sitemap, robots `Host`, Open Graph URL, and JSON-LD `url` all use that origin.

**Indexation.** The homepage is `index, follow`. `robots.txt` allows `/` and points to the sitemap. There is no blog, so the sitemap has one URL.

**Title and description.** Written for humans first, then search. They name who I am and the work I do. They do not stuff keywords. I do not use em dashes in titles, descriptions, or page copy.

**Structured data.**

- `Person`: name, job title, email, image, LinkedIn, GitHub
- `WebSite`: name, URL, description, language

That is enough for a personal site. I did not add `FAQPage`, `Article`, or fake review markup.

**On-page.** One `h1`. Section headings (`h2`/`h3`) match the page outline. Internal links are in-page anchors (`#experience`, `#contact`). Images have descriptive `alt` text.

**What I skipped on purpose.** No keyword-stuffed blog, no auto-generated pages, no hidden text, no `hreflang` (English only), no client-side-only content that crawlers would miss.

## If I were auditing this like a client site

I would still check:

1. Search Console property verified, sitemap submitted, no coverage errors.
2. Live title / description / canonical match this repo.
3. Rich Results / schema validator on the homepage JSON-LD.
4. Mobile layout, tap targets, and theme toggle do not hide content.
5. `https://www.lindymurphy.com` and `http://` redirect to the canonical host (DNS / Vercel domain settings, not this repo).
6. After each deploy, fetch `/`, `/robots.txt`, and `/sitemap.xml` and confirm they are `200`.

## What does not belong in this repo

- Search Console exports with query or page data
- API keys, tokens, or `.env` files
- Unpublished research or client work
- A generic "SEO bible" that is not how this site is built

Reusable checklists and snippets I want other people to copy should live in a separate public repo. This repo should stay the website.
