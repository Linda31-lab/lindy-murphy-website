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

## Google Search Console

The site already ships the files Search Console needs after you verify ownership:

- `https://lindymurphy.com/robots.txt`
- `https://lindymurphy.com/sitemap.xml`

### 1. Add the property

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add a **URL prefix** property: `https://lindymurphy.com`.
3. Prefer the **HTML tag** verification method.

If you also want Search Console to cover `http` and `www` variants, add a **Domain** property (`lindymurphy.com`) and verify with a DNS TXT record at your domain registrar instead.

### 2. Put the verification token on the site

From the HTML tag Google shows:

```html
<meta name="google-site-verification" content="PASTE_THIS_VALUE" />
```

Either:

- paste `PASTE_THIS_VALUE` into `googleSiteVerification` in `lib/content.ts`, or
- set `GOOGLE_SITE_VERIFICATION` as an environment variable (Vercel → Project → Settings → Environment Variables).

Redeploy, then click **Verify** in Search Console.

### 3. Submit the sitemap

In Search Console → **Sitemaps**, submit:

```text
https://lindymurphy.com/sitemap.xml
```
