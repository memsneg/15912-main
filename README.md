# 15912 Multi-Brand Appliance Maintenance Website

Next.js 15 site for local SEO, Google Ads landing pages, and lead generation across Egyptian governorates.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `/` — Homepage
- `/[brand]` — Brand pages (lg, kiriazi, ariston, white-whale, zanussi)
- `/[brand]/[governorate]` — Governorate landing pages (main Ads LPs)
- `/admin` — Media buyer dashboard (landing URLs index)
- Legal: `/privacy-policy`, `/terms`, `/cookies`, `/about`, `/contact`

## Environment

Set `NEXT_PUBLIC_SITE_URL` for canonical URLs and sitemap. Optional: GTM, GA4, Meta Pixel, Clarity IDs.

## Data

Leads and events are stored in `data/leads.json` and `data/events.json` (replace with PostgreSQL/MySQL + Laravel API in production).

## Build

```bash
npm run build
npm start
```

Generates 25 brand pages + 125 governorate pages (5×5) statically.
