# Google Search Console setup

Use this after a production deploy of [lindymurphy.com](https://lindymurphy.com).

## Files the site already serves

- https://lindymurphy.com/robots.txt
- https://lindymurphy.com/sitemap.xml

## 1. Add the property

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add a **URL prefix** property: `https://lindymurphy.com`.
3. Prefer the **HTML tag** verification method.

To also cover `http` and `www` variants, add a **Domain** property (`lindymurphy.com`) and verify with a DNS TXT record at the registrar.

## 2. Put the verification token on the site

From the HTML tag Google shows:

```html
<meta name="google-site-verification" content="PASTE_THIS_VALUE" />
```

Either:

- paste `PASTE_THIS_VALUE` into `googleSiteVerification` in `lib/content.ts`, or
- set `GOOGLE_SITE_VERIFICATION` as an environment variable in Vercel (Project → Settings → Environment Variables).

Push or redeploy, wait until the homepage HTML includes that meta tag, then click **Verify**.

## 3. Submit the sitemap

In Search Console → **Sitemaps**, submit:

```text
https://lindymurphy.com/sitemap.xml
```

## After it is verified

- Confirm the homepage is indexed (URL Inspection).
- Watch Page indexing for unexpected `noindex` or not-found URLs.
- Treat Search Console as the measurement layer. Change titles and copy in this repo, not in a one-off HTML edit on the server.
