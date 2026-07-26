# Nozentic — Next.js / TypeScript / Tailwind

Production-ready conversion of the Nozentic marketing site (Home, About, Services, For Startups, Contact) — same
brutalist grid design, lime/black/white palette, and light/dark toggle — rebuilt as a real Next.js App Router project.

## Stack
- **Next.js 14** (App Router, Server Components by default)
- **TypeScript**
- **Tailwind CSS** (`darkMode: 'class'`, custom `lime` / `ink` / `paper` tokens)
- **Resend** for the contact form's email delivery

## Getting started
```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY
npm run dev
```
Visit `http://localhost:3000`.

## Project structure
```
src/
  app/
    layout.tsx        # root layout, fonts, metadata, JSON-LD
    page.tsx           # Home
    about/page.tsx
    services/page.tsx
    startups/page.tsx  # "For Startups" page
    contact/page.tsx
    api/contact/route.ts  # Resend send handler
    sitemap.ts
    robots.ts
    globals.css
  components/
    layout/Header.tsx   # nav, mobile menu, dark/light toggle
    layout/Footer.tsx
    ContactForm.tsx      # client component, posts to /api/contact
    ThemeProvider.tsx    # dark-mode context, persists to localStorage
  lib/
    data.ts    # all site copy/content as typed data (services, team, testimonials, etc.)
    resend.ts  # Resend client
```

## Contact form → Resend
1. Create a [Resend](https://resend.com) account and verify a sending domain (e.g. `nozentic.com`).
2. Set in `.env.local`:
   ```
   RESEND_API_KEY=re_xxx
   CONTACT_TO_EMAIL=info@nozentic.com
   CONTACT_FROM_EMAIL=Nozentic Website <noreply@nozentic.com>
   ```
3. `POST /api/contact` accepts `{ name, email, projectType, message }`, sends the inquiry to `CONTACT_TO_EMAIL` with
   `replyTo` set to the visitor's email, and returns `{ success: true }` or a JSON error.

## SEO
- Per-page `metadata` exports (title, description, canonical) in every route.
- Root `layout.tsx` sets `metadataBase`, Open Graph, Twitter card, and an Organization JSON-LD block.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically.
- Set `NEXT_PUBLIC_SITE_URL` in production so canonical/OG URLs resolve correctly.
- Add real `public/og-image.png` (1200×630) and `public/favicon.ico` — both are referenced but not included here.

## Notes
- Dark/light mode toggles a `dark` class on `<html>` and persists the choice in `localStorage`.
- No fixed breakpoints were hand-tuned beyond Tailwind's default `sm/md/lg` — grids and type sizes are responsive by
  default across mobile, tablet, laptop and desktop.
- The placeholder phone number (+94 76 123 4567) and address (Colombo, Sri Lanka) in the footer/contact page should
  be swapped for your real details.
