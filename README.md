# Lisbon Tag Rugby — club one-pager

A cinematic, mobile-first one-pager for **Lisbon Tag Rugby** (Belém, Lisbon),
modeled on the Quechua-lookbook scroll experience: full-bleed hero, pinned
"Discover the full video" button, language switcher (EN / PT), rules, venue
map, gear, kit and a photo wall.

Built with **Astro** (static output, no client framework) + plain TypeScript
and hand-rolled CSS design tokens.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the production build
```

GitHub Pages preview: build output is fully static — push `dist/` anywhere
(Netlify/Vercel/Cloudflare Pages/GitHub Pages) or run
`gh`-based deploys. Set the `site` option in `astro.config.mjs` once the
domain is known.

## Where things live

| What | Where |
| --- | --- |
| All copy (EN + PT) | `src/i18n/en.ts`, `src/i18n/pt.ts` |
| Design tokens (colours, type, spacing) | `src/styles/tokens.css` |
| Display font (custom, club-made) | `Lisbon Tag.ttf` (source) → `public/fonts/LisbonTag.woff2` |
| Body font (Archivo, variable 400–700) | `public/fonts/archive.woff2` |
| Placeholder photos / hero image | `public/media/*.jpg` |
| Favicon + share card | `public/favicon.png`, `public/media/og.png` |
| Sections | `src/components/*.astro` |
| Interactions (reveals, popup, header theming) | `src/scripts/main.ts` |
| Routes | `/` = English, `/pt/` = Portuguese (hreflang set in `Layout.astro`) |

## Swap the placeholders for real assets

1. **Photos** — replace the files in `public/media/` (keep the same names,
   or update `src/i18n/*.ts` `photos`/`items` arrays). The current images are
   licensed Wikimedia Commons placeholders and are credited below.
2. **Hero video** — drop a club loop at `public/media/hero-loop.mp4`, then in
   `src/components/Hero.astro` swap the `<img class="media kenburns" …>` for
   the commented `<video>` line. Add play/pause-on-hidden logic in
   `src/scripts/main.ts` (a hook comment marks the spot).
3. **Full-video popup** — same file; swap the `<img>` in
   `src/components/VideoPopup.astro` for the commented `<video>` line.
4. **WhatsApp** — set `whatsappHref` in both i18n files to
   `https://wa.me/<number>` and set `whatsappTbd: false`.
5. **Brand tokens** — when the Figma brand values are confirmed, override the
   values in `src/styles/tokens.css` only.

## Media credits (placeholders — replace and remove these lines)

Photos via [Wikimedia Commons](https://commons.wikimedia.org):

- `tag-event.jpg` — *Rugby Ball at Tag Rugby event 260905* by **Aspere**, CC0
- `session-1.jpg` — *Cardiff Rugby League Club in a match against New Zealand* by **Geoff Charles**, CC BY-SA 4.0
- `session-2.jpg` — *Colombes, 8-4-22, rugby, RCF contre Blackheath* by **Agence Rol**, public domain
- `session-3.jpg` / `session-4.jpg` — *Italy–Chile rugby test match 2025* by **Superchilum**, CC BY-SA 4.0
- `session-5.jpg` — *ST vs Gloucester – Match – 23* by **PierreSelim**, CC BY-SA 3.0
- `community-1.jpg` — *Supportrice du Portugal, match de rugby contre l'Australie* by **Touam (Hervé Agnoux)**, CC BY-SA 4.0

Fonts: *Lisbon Tag* (club-provided), *Archivo* ([SIL OFL](https://scripts.sil.org/OFL)).

## Note on the rules section

Copy follows the standard **World Tag Rugby / Rugby Europe** laws (3 tags =
turnover, 5-point try, 2×30 min, 7v7). If the Thursday session runs a house
variant (e.g. 5 tags, 2/3-point tries), edit `rules.cards` / `rules.facts` in
both i18n files.
