# shermi.dev — Astro + Tailwind Portfolio

Three-page portfolio with subdomain routing.

| URL | Page | Style |
|-----|------|-------|
| `shermi.dev` | Hub landing | Minimal, links to both sides |
| `nerdy.shermi.dev` | Academic portfolio | Plain scholarly, CV-style |
| `life.shermi.dev` | Athletic + Creative | Minimalist, photo-forward |

## 🚀 Getting started

```bash
npm install
npm run dev   # → http://localhost:4321
```

## 📁 Structure

```
src/
  pages/
    index.astro           # shermi.dev hub
    nerdy/index.astro     # nerdy.shermi.dev
    life/index.astro      # life.shermi.dev
  layouts/Layout.astro
  styles/global.css
public/
  photos/                 # ← drop your photos here
  favicon.svg
```

## 🖼️ Adding your photos

All photo placeholders are marked with `✏️` comments. Replace the `<div class="photo-slot ...">` blocks with real `<img>` tags:

```html
<!-- Before -->
<div class="photo-slot w-full aspect-square rounded-xl">...</div>

<!-- After -->
<img
  src="/photos/your-photo.jpg"
  alt="Description"
  class="w-full aspect-square object-cover rounded-xl"
/>
```

Drop your images into `public/photos/`. Recommended names:
- `public/photos/headshot.jpg` — professional headshot for the nerdy page
- `public/photos/hero.jpg` — casual photo for the life page
- `public/photos/running-1.jpg`, `running-2.jpg`, `running-3.jpg`
- `public/photos/climbing-1.jpg`, `climbing-2.jpg`
- `public/photos/dance-1.jpg`, `dance-2.jpg`, `dance-3.jpg`

Keep images under 400KB. Use `.webp` if possible for faster load times.

## ✏️ Content checklist

Search for `✏️` in every file. Key things to update:

- [ ] All `YOUR_HANDLE`, `YOUR_USERNAME`, `YOUR_GITHUB`, `YOUR_LINKEDIN` placeholders
- [ ] `your@email.com` → your real email (appears in all three pages)
- [ ] `nerdy/index.astro` — name, title, department, university, bio, research, publications, talks, code repos
- [ ] `life/index.astro` — race name, finish time, climbing grade, dance styles, social handles
- [ ] `astro.config.mjs` — update `site` with your real domain

## 🌐 Deploying with subdomains (Netlify recommended)

### Option A — Netlify (easiest)

1. Push repo to GitHub
2. Create **three** Netlify sites from the same repo, each with a different base directory redirect OR use Netlify's rewrites

Actually the simplest approach: deploy the single Astro site normally, then configure subdomain rewrites.

**Deploy once:**
1. Connect GitHub repo to Netlify
2. Build command: `npm run build` · Publish directory: `dist`
3. Your site is live at `your-site.netlify.app`

**Set up subdomains:**
1. Add your custom domain `shermi.dev` in Netlify → Domain settings
2. Netlify auto-creates `www.shermi.dev`
3. For `nerdy.shermi.dev`: add a CNAME record in your DNS pointing to `your-site.netlify.app`
4. In Netlify → Domain settings → add `nerdy.shermi.dev` as a branch/redirect alias

**Add a `netlify.toml`** in the repo root to handle subdomain → path rewrites:
```toml
[[redirects]]
  from = "https://nerdy.shermi.dev/*"
  to   = "/nerdy/:splat"
  status = 200

[[redirects]]
  from = "https://life.shermi.dev/*"
  to   = "/life/:splat"
  status = 200
```

### Option B — Vercel

Same idea — deploy once, configure rewrites in `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/", "has": [{"type":"host","value":"nerdy.shermi.dev"}], "destination": "/nerdy" },
    { "source": "/", "has": [{"type":"host","value":"life.shermi.dev"}],  "destination": "/life" }
  ]
}
```

### Option C — GitHub Pages (simplest, no subdomain routing)

Subdomains are not supported on GitHub Pages without a paid plan. Instead, use path-based URLs:
- `shermi.dev/` → hub
- `shermi.dev/nerdy` → academic
- `shermi.dev/life` → life

This works perfectly fine and is the easiest option while you get started.

## 🎨 Design tokens

Defined in `tailwind.config.mjs`:

| Token | Hex | Usage |
|-------|-----|-------|
| `pink` | `#F2C4CE` | Primary accent |
| `pink-soft` | `#FAE8EB` | Backgrounds, tags |
| `pink-deep` | `#D4849A` | Links, labels |
| `ink` | `#1C1618` | Body text |
| `ink-mid` | `#5C4A50` | Secondary text |
| `ink-light` | `#9C8A90` | Captions, labels |

Fonts: **DM Serif Display** · **DM Sans** · **IBM Plex Mono** (Google Fonts)
