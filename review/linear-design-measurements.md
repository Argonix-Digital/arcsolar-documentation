# Linear docs: measured design reference

Captured on 21 October 2026 using read-only browser DOM, computed styles and accessible CSSOM declarations. Pages: [docs index](https://linear.app/docs), [start guide](https://linear.app/docs/start-guide), [projects](https://linear.app/docs/projects). Raw measurements are in `review/linear-measurements/`.

The corrected tool reference is [morluto/rea](https://github.com/morluto/rea). REA 6.7.0 captured the index, Start Guide and Projects pages with DOM, accessibility, URL and screenshots using an isolated Chrome profile at 1440 × 1000 in dark mode. Each capture reports complete selected artifacts and termination of its owned browser process. The CLI was used without changing Codex configuration. Computed CSS and exact geometry were measured separately through the browser because REA's passive capture does not expose computed-style evaluation.

REA evidence IDs:

- Index: `ev_9b40f1bbac93e37437c4d123f62d6747f4ef4e3646deff92a3a9b6b13ed5b4db`
- Start Guide: `ev_d6a7f0c1f9c5c08d5f4073ecb5eb383fc00b4bd2bf8e54fc4c5260c37f2f2dac`
- Projects: `ev_df9664a1ee3100d1073ee9267d316c3312cbb84cd8da40482631de10760863a9`

Raw REA captures remain local in `/tmp/arcsolar-rea-*-capture.json`. The committed summaries retain provenance and coverage without publishing Linear's complete page text or screenshots.

## Typography

| Role | Family | Size / line height | Weight | Tracking |
| --- | --- | --- | --- | --- |
| Index title | Inter Variable | 40 / 44 px | 590 | -0.88 px |
| Article title | Inter Variable | 32 / 36 px | 590 | -0.704 px |
| Article section heading | Inter Variable | 24 / 31.92 px | 590 | -0.288 px |
| Article section heading on 390px mobile | Inter Variable | 20 / 26.6 px | 590 | -0.24 px |
| Subheading | Inter Variable | 20 / 32 px | 590 | 0 |
| Reading text and article description | Inter Variable | 15 / 24 px | 400 | -0.165 px |
| Card title | Inter Variable | 15 / 24 px | 510 | -0.165 px |
| Card description | Inter Variable | 14 / 21 px | 400 | -0.182 px |
| Sidebar label | Inter Variable | 14 / 21 px | 510 | -0.182 px |
| Table of contents | Inter Variable | 13 / 19.5 px | 400 | normal |

Font features: `cv01`, `ss03`. The source stack falls back to SF Pro Display and system sans-serif. ArcSolar uses Mintlify's Inter webfont with the measured weights and features; it does not copy a vendor-hosted font asset.

## Colours

| Role | Dark | Light |
| --- | --- | --- |
| Canvas | `#08090A` | `#FFFFFF` |
| Primary text | `#F7F8F8` | `#282A30` |
| Reading text | `#D0D6E0` | `#3C4149` |
| Muted text | `#8A8F98` | `#6F6E77` |
| Border | `#23252A` | `#E9E8EA` |
| Panel | `#0F1011` | `#F8F8F8` |

Index cards use `rgba(255,255,255,0.05)` for both fill and 1px border in dark mode. No card shadow. The body's computed dark canvas is `#08090A`, distinct from the marketing canvas token `#010102` in the supplied design analysis.

## Geometry and rhythm

- Header: 64px high. Desktop sidebar: 280px including its right rule; labels sit 20px from the edge.
- Desktop reading layout: maximum 1024px wrapper with 24px side padding. At 1440px viewport, article left edge is 372px, reading column is 650px and the title begins at y=112px.
- Article-to-contents gap: 76px. Contents links have 4px vertical padding.
- Article title → description: 24px. Index title → description: 12px.
- Description → main visual: 20px. Major article headings use 56px top margin and the following paragraph starts 12px below the heading.
- Index title section → first topic heading: 48px. Topic heading → card grid: 32px. Grid gap: 16px.
- Cards: 280px tall, 8px corners, 1px border, no shadow. Icon area padding: 24px 20px. Text area padding: 20px. Title-to-description gap: 4px.
- Product images: 8px corner radius; the measured Projects hero is 650px wide at 1440px viewport. The backdrop in that example is already part of the source image.
- Sidebar groups: 36px row height. Leaf links: 32px row height. Both use 8px corners in Linear.

## Responsive observations

| Viewport | Index columns | Card width | Title left edge |
| --- | --- | --- | --- |
| 390px | 1 | 342px | 24px |
| 640px | 2 | 288px | 24px |
| 768px | 2 | 352px | 24px |
| 1024px | 2 | 340px | 304px |
| 1280px | 4 | 226px | 304px |
| 1440px | 4 | 242px | 372px |

These are observed samples, not inferred exact media-query boundaries. At 390px, the article keeps 24px horizontal gutters and its 32px title. The mobile Projects title begins at y=176px, below the mobile header/navigation area.

## ArcSolar application

The implementation applies the measured scale, palette, card geometry, spacing and desktop reading width. It retains native Mintlify search, navigation, copy controls, accordions and mobile behaviour. The product previews are native HTML/SVG, use fictional example values and match documented app labels; map imagery and technical drawings retain their original content and attribution. Changelog entries and anchors remain unchanged.

## Measured implementation readback

At 1440 × 1000, ArcSolar's first card is x=352, y=298.602, width=242, height=280, radius=8px, with a 1px `rgba(255,255,255,0.05)` border and no shadow. Linear's measured first card is x=352, y=298.594, width=242, height=280 with the same border, radius and shadow. Both index headings begin at x=372, y=112. The fractional vertical difference is browser text rounding; the contents and product identity remain ArcSolar's.
