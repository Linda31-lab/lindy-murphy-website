# Site launch checklist

The same list I use on this site. Copy it for another property and replace the URLs.

## Before first crawl

- [ ] Canonical host chosen (`https://lindymurphy.com`). `www` and `http` redirect there.
- [ ] Homepage returns `200`. Soft 404s and auth walls are not on public URLs.
- [ ] `<title>` and meta description are unique, accurate, and free of leftover template text.
- [ ] One clear `h1`. Headings follow the page outline.
- [ ] Images have `alt` text. Decorative images are marked accordingly.
- [ ] `robots.txt` allows the pages you want indexed and lists the sitemap.
- [ ] XML sitemap lists only canonical, indexable URLs.
- [ ] Structured data matches visible content. No fake `FAQ`, `Review`, or `Article` markup.
- [ ] No `noindex` on the homepage. Staging is blocked. Production is not.
- [ ] Analytics / Search Console measurement is ready, but not required to launch.

## After deploy

- [ ] Fetch `/`, `/robots.txt`, `/sitemap.xml` on the live host.
- [ ] View source: title, description, canonical, and JSON-LD match the repo.
- [ ] Verify the Search Console property.
- [ ] Submit the sitemap.
- [ ] URL Inspection on the homepage. Request indexing if it is a new URL.
- [ ] Check mobile layout and in-page links (`#contact`, `#experience`).

## When copy changes

- [ ] Edit `lib/content.ts` (or the equivalent source), not a live HTML hotfix.
- [ ] Keep title, meta description, visible intro, and JSON-LD description aligned.
- [ ] Push to `main`. Confirm the Vercel production deploy succeeded.
- [ ] Re-inspect the URL in Search Console if the title or description changed in a material way.
