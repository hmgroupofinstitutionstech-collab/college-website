# ABC College of Excellence — Website

A modern, responsive, single-page college website built with **Next.js (App Router)**,
**React**, **TypeScript**, **Tailwind CSS**, and **Lucide React** icons.

All content is fictional sample content and all images are placeholders, designed to be
easy to replace later.

---

## Getting started

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # run ESLint (next lint)
```

Requires **Node.js 18.18+** (Node 20 LTS recommended).

---

## Project structure

```
abc-college/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── college-logo-placeholder.svg
│       ├── campus-placeholder.svg
│       ├── mission-placeholder.svg
│       ├── trustee-1-placeholder.svg
│       ├── trustee-2-placeholder.svg
│       └── trustee-3-placeholder.svg
├── src/
│   ├── app/
│   │   ├── globals.css        # Theme colour variables + base styles
│   │   ├── layout.tsx         # Fonts, metadata, <html>/<body>
│   │   └── page.tsx           # Homepage — assembles all sections
│   ├── components/
│   │   ├── Container.tsx      # Max-width wrapper
│   │   ├── Button.tsx         # Reusable button (anchor-based)
│   │   ├── SectionHeading.tsx # Section title + accent rule + intro
│   │   ├── FadeIn.tsx         # Fade-in-on-scroll wrapper
│   │   ├── Logo.tsx           # Crest + college name lockup
│   │   ├── Header.tsx         # Sticky nav (desktop)
│   │   ├── MobileMenu.tsx     # Slide-in mobile menu
│   │   ├── HeroSection.tsx    # Hero / landing
│   │   ├── AboutSection.tsx   # About + stats
│   │   ├── CoursesSection.tsx # Programme categories
│   │   ├── GallerySection.tsx # Campus image grid
│   │   ├── TrusteesSection.tsx
│   │   ├── TrusteeCard.tsx
│   │   ├── MissionSection.tsx
│   │   ├── MissionPillar.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── site.ts            # ← ALL editable content lives here
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

---

## Where to edit content

**Almost everything lives in one file: [`src/data/site.ts`](src/data/site.ts).**

| What to change                     | Where                                              |
| ---------------------------------- | -------------------------------------------------- |
| College name, short name, motto    | `college` object in `src/data/site.ts`             |
| "Established 1995" line            | `college.established`                              |
| Hero supporting sentence           | `college.heroSupporting`                          |
| Navigation links                   | `navLinks` array                                  |
| About text & statistics            | `about`, `stats`                                  |
| Courses / programmes               | `courses`, `coursesIntro`                         |
| Gallery images                     | `gallery`, `galleryIntro`                         |
| Trustee names / roles / bios       | `trustees` array + `trusteesIntro`                |
| Mission heading, paragraph, image  | `mission` object                                  |
| Mission pillars                    | `missionPillars` array                            |
| Contact address / phone / email    | `contact` object                                  |
| Footer quick links                 | `footerQuickLinks`                                |
| Social media links                 | `socialLinks`                                     |
| Legal links (Privacy/Terms/etc.)   | `legalLinks`                                       |
| Copyright line                     | `copyright`                                        |

**Colours** are CSS variables in [`src/app/globals.css`](src/app/globals.css) (the
`:root` block). Change `--color-navy`, `--color-gold`, etc. to re-theme the whole site;
Tailwind maps them to the `navy` / `gold` / `charcoal` utility classes.

**Fonts** are configured in [`src/app/layout.tsx`](src/app/layout.tsx) (Playfair Display
for headings, Inter for body).

**Page title / SEO / Open Graph** are in the `metadata` export of
[`src/app/layout.tsx`](src/app/layout.tsx).

---

## Placeholder images to replace

All placeholders are simple SVGs in `public/images/`. Replace each file (keeping the same
name, or update the path in `src/data/site.ts` / the components):

| File                                          | Used for                     | Referenced in                          |
| --------------------------------------------- | ---------------------------- | -------------------------------------- |
| `public/images/college-logo-placeholder.svg` | Header & footer logo/crest   | `Logo.tsx`, `Footer.tsx`               |
| `public/favicon.svg`                          | Browser tab favicon          | `layout.tsx` (`metadata.icons`)        |
| `public/images/campus-placeholder.svg`        | Hero background & gallery     | `HeroSection.tsx`, `gallery` in site.ts |
| `public/images/mission-placeholder.svg`       | Mission section & gallery     | `mission` / `gallery` in site.ts       |
| `public/images/trustee-1-placeholder.svg`     | Trustee 1 portrait           | `trustees[0]` in site.ts               |
| `public/images/trustee-2-placeholder.svg`     | Trustee 2 portrait           | `trustees[1]` in site.ts               |
| `public/images/trustee-3-placeholder.svg`     | Trustee 3 portrait           | `trustees[2]` in site.ts               |

> When you swap in real photos (e.g. `.jpg`/`.webp`), update the corresponding `image`
> path in `src/data/site.ts` and always keep a descriptive `alt` / `imageAlt` value.

---

## Gallery photos (Cloudinary — automatic)

The campus gallery does **not** store photos in this repo — they live on
[Cloudinary](https://cloudinary.com) (a free image CDN) so the codebase stays small,
deploys stay fast, and photos are auto-optimized (WebP/AVIF, resized per device).

The gallery is **tag-driven**: it automatically shows every Cloudinary photo carrying a
specific tag. There is **no photo list to maintain in code.**

**Current configuration** (in [`src/lib/cloudinary.ts`](src/lib/cloudinary.ts)):

- `CLOUDINARY_CLOUD_NAME = "ij1euuf5"`
- `GALLERY_TAG = "hmcollege"`

**To add / remove a gallery photo — no code change needed:**

1. Upload the photo in the Cloudinary Media Library.
2. Apply the tag **`hmcollege`** to it (select photos → Add tag).

The site refreshes its photo list from Cloudinary **hourly** (ISR), so tagged photos
appear on the live site within an hour — or immediately on the next deploy. To remove a
photo from the gallery, just remove the tag (or delete the image).

**How it works:** the gallery reads
`https://res.cloudinary.com/ij1euuf5/image/list/hmcollege.json` (a server-side fetch in
`fetchGalleryPublicIds()`). This requires **"Resource list" to be allowed** under
Cloudinary → Settings → Security. If Cloudinary is ever unreachable, the gallery falls
back to the local placeholders in `public/images` — the build never breaks.

The homepage shows the first **12** photos with a **"Show all"** button (change the count
via the `initialCount` prop in
[`src/components/GallerySection.tsx`](src/components/GallerySection.tsx)).

> Prefer ImageKit or another CDN? Only `src/lib/cloudinary.ts` needs to change; the rest
> of the app is unaffected.

---

## Notes

- All content is fictional and all images are placeholders. No branding, content, images,
  or code was copied from any real institution.
- Accessibility: semantic HTML, keyboard-accessible menu, visible focus states, reduced-
  motion support, and descriptive alt text throughout.
- Responsive and tested at 320 / 375 / 768 / 1024 / 1440 px with no horizontal scroll.
