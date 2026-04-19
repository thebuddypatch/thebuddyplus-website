# the buddy — Relax Mode Patch landing page

Marketing website for **the buddy Revive Sheet (Relax Mode Patch)** — a transdermal GABA 20,000 mcg patch built for travelers, late-night flyers, and anyone who needs an easier way to fall asleep.

**Live site:** enable GitHub Pages on this repo (Settings → Pages → Deploy from branch `main` / root) and the URL becomes available within a minute or two.

## What's inside

- `index.html` — full single-page site
- `styles.css` — design system (Figtree / Sarabun, mint-and-ink palette, grid tiles inspired by the Coral Club reference)
- `script.js` — English / Thai toggle (persisted in `localStorage`, defaults to Thai if the browser is Thai)
- `images/` — product mockups, pouch, patch sheet, teddy lifestyle shot

## Sections

1. Hero — "Turn on Relax Mode. Anywhere you go."
2. Problem / solution tile grid (Coral-style)
3. Three use cases — Bedtime, Travel, Relax
4. Ingredient spotlight — GABA 20,000 mcg + supporting botanicals
5. How it works — Peel · Stick · Relax
6. Benefits grid
7. Travel testimonial
8. FAQ (6 questions)
9. Where to buy — Shopee · Lazada · TikTok Shop
10. Footer with compliance disclaimer

## Languages

- `EN` / `TH` switch in the top-right nav
- Every visible string has `data-en` / `data-th` attributes — edit either attribute to retranslate; no rebuild needed
- Browser detection falls back to EN

## Editing content

Open `index.html` and search for the phrase you want to change. Each translatable element looks like:

```html
<h1 data-en="Turn on Relax Mode." data-th="เปิดโหมดพัก">Turn on Relax Mode.</h1>
```

Change both attributes to update both languages.

## Running locally

Just open `index.html` in a browser — no build step.
