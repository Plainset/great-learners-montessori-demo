# Build Brief

Keep this compact. Add only sourced facts and assets actually used or deliberately rejected.

## Contact
- Email: greatlearners@gmail.com
- Email source URL: https://learnersmontessori.co.uk/great-learners/ (Cloudflare-obfuscated in raw HTML source; confirmed by rendering the live page in a real browser — visible mailto link and plain text "email us at greatlearners@gmail.com" in the Contact section)
- Rechecked date: 2026-07-09
- Phone: 0208 455 8511 (tel:+442084558511)
- Address: The Riding, Golders Green, NW11 8HL

## Business State Check
- Status: still open at logged address
- Checked sources:
  - https://learnersmontessori.co.uk/great-learners/ (live render, 2026-07-09) — current copy, phone, email, address all match LEADS.md
  - https://reports.ofsted.gov.uk/provider/16/EY360232 (official Ofsted register) — Registration Status: **Open**; Registered Address: "The Greek Orthodox Cathedral of the Holy Cross and St Michael, The Riding, London, NW11 8HL"; Registration Date: 16 Aug 2007; Registered Person: Budding Learners Limited; Telephone 020 8455 8511 (matches)
  - Companies House (find-and-update.company-information.service.gov.uk) — "BUDDING LEARNERS LIMITED", company no. 05294354, status **Active**, incorporated 23 Nov 2004
  - Web search cross-check (daynurseries.co.uk, locrating.com, snobe.co.uk aggregator listings) — all show the same Golders Green / The Riding address and an Outstanding Ofsted rating dated April 2023, corroborating the nursery's own site
- Notes: This is one of three Learners Montessori nurseries (Budding Learners, Kingsbury/Slough Lane NW9; Little Learners, Edgware HA8; Great Learners, Golders Green NW11 — this build). LEADS.md's "3-branch family group" flag is confirmed accurate. All three share one dated template site (learnersmontessori.co.uk) but operate as distinct locations with their own address/phone/email. This build is scoped to the Great Learners (Golders Green) branch only, per instructions — the branding, title, and copy make that scope explicit throughout (header tagline "Montessori · Golders Green", footer disclosure of the sister branches without covering their content).
- Build decision: proceed

## Page Plan
- Scope: 3-page default
- Pages: index.html (Home), our-nursery.html (Our Nursery — classrooms/activities/meals/team/Ofsted), contact.html (Visit & Contact — address/hours/FAQ/enquiry)
- Reason for any extra page: n/a — no extra pages added; content justified 3 well-populated pages, not more

## Pitch Hook
- Verified observation: The current site (learnersmontessori.co.uk/great-learners/) is a shared mid-2010s template covering all three sister nurseries on one site, with no distinct copyright year. Its "Step inside our Classroom" tab widget (Baby Room / Toddlers Classroom / Pre-school) is functionally broken — clicking "Toddlers Classroom" or "Pre-school" visually highlights the tab button but the panel content underneath never changes from "The Baby Room" text (confirmed live: raw HTML has real, distinct Toddlers/Pre-school copy sitting in `display:none` panels that the page's own `toggleRoom()` JS never reveals). A visitor evaluating the Toddlers or Pre-school room currently cannot see any information about it without reading page source.
- Source URL: https://learnersmontessori.co.uk/great-learners/ (live render + view-source, 2026-07-09)

## Allowed Facts
| Fact | Source URL | Used where |
|---|---|---|
| Established September 2007 (registered 16 Aug 2007) | learnersmontessori.co.uk/great-learners/ + reports.ofsted.gov.uk/provider/16/EY360232 | Home hero/about, stat strip |
| Up to 65 children, ages 6 months–5 years | learnersmontessori.co.uk/great-learners/ | Home hero, stat strip, Our Nursery |
| Ofsted Outstanding, inspected 25 Apr 2023 (report published 31 May 2023) | learnersmontessori.co.uk/great-learners/ + reports.ofsted.gov.uk/provider/16/EY360232 (inspection date match) + daynurseries.co.uk/locrating.com aggregator corroboration | Home, Our Nursery, Contact (all link to real Ofsted report) |
| Classrooms: Baby Room (6mo–2yr), Toddlers (2–3yr), Pre-school (3+) with full descriptive text for each | learnersmontessori.co.uk/great-learners/ (raw HTML `.room-section` panels) | Our Nursery classroom sections, Home classroom teaser cards |
| Extra activities: dance, active play, French, day trips, yoga, music; weekly themed activities (example: Dinosaur Week); Fun Friday dancing; annual Christmas show; gardening | learnersmontessori.co.uk/great-learners/ (Activities & Experiences section + raw HTML alt text on images/act*.jpg) | Home features, Our Nursery activities section |
| Freshly prepared meals catering to dietary needs, one cook | learnersmontessori.co.uk/great-learners/ | Our Nursery meals section |
| Accepts childcare vouchers; free entitlement (funded hours) for 3–4 year olds; key worker system with development reports | learnersmontessori.co.uk/about.html | Contact page (fees/funding note, FAQ) |
| Opening hours: 8am–6pm Mon–Fri, 48 weeks/year | learnersmontessori.co.uk/great-learners/ + corroborated by WebSearch aggregator snippet | Contact hours table, FAQ |
| Staff names + roles: Ms Kitty (Nursery Manager), Ms Jigna (Preschool Practitioner), Ms Shanika (Preschool Leader), Ms Nooreen (Deputy Manager & Toddler Room Leader), Ms Farzana & Ms Janaki (Toddler Practitioners), Ms Chammika (Baby Room Leader), Ms Ivneet (Baby Room Practitioner), plus one Cook | learnersmontessori.co.uk/great-learners/ ("Meet our Team" section) | Our Nursery team section |
| Two staff quotes (Ms Kitty, Ms Jigna) | learnersmontessori.co.uk/great-learners/ | Our Nursery team section |
| Parent testimonial — Dimpy Satija | learnersmontessori.co.uk/great-learners/ (visible testimonial carousel) | Home, reused |
| Parent testimonial — Dana Warcel (names staff: Kitty, Noreen, Jigna, Chammi) | learnersmontessori.co.uk/great-learners/ (raw HTML, 2nd carousel slide, not visible without interaction but present in DOM as real published testimonial content) | Our Nursery team section |
| Founder Neera Jhunjhunwala; Montessori diploma 1986; opened Little Learners (2004, first), then Budding Learners, then Great Learners (2007, third) | learnersmontessori.co.uk/about.html | Home about copy (light paraphrase), footer family line |
| Sister nurseries: Budding Learners (Jennings Hall, Slough Lane, London NW9 8QG) and Little Learners (45 Whitchurch Lane, Edgware HA8 6PF) | learnersmontessori.co.uk/gallery.html (locations list) | Footer disclosure line + Contact FAQ, mentioned only, not covered |
| Building context: nursery occupies rooms within the Greek Orthodox Cathedral of the Holy Cross and St Michael, The Riding | reports.ofsted.gov.uk/provider/16/EY360232 (registered address) | Contact page address detail |

## Do Not Claim
| Claim or uncertainty | Reason |
|---|---|
| Exact Ofsted inspection report wording/quotes beyond "Outstanding" and the inspection date | Could not extract readable text from the Ofsted PDF report (no local PDF text tooling available); grade corroborated via own site + register + 2 independent aggregator snippets, but full report prose not verified word-for-word, so none was quoted |
| Any specific class size/staff ratio numbers | Not stated on the source page |
| Fees/pricing figures | Not published on the source site; only "accepts childcare vouchers" and "free entitlement for 3–4 year olds" are stated, so only those are claimed |
| Individual staff photos | The nursery's own "Meet our Team" section uses generic grey placeholder avatar icons for every staff member, not real photos — the redesign uses initials-only avatar chips instead of inventing or implying real photos exist |
| daynurseries.co.uk 3rd-party review ("Our twin boys were at Great Learners...") | Third-party review site content, not the business's own published copy — not reproduced; only the nursery's own on-site testimonials (Dimpy Satija, Dana Warcel) are used |

## Asset Manifest
| File | Source URL | Native size | License/credit | Watermark checked | Intended section | Copy match |
|---|---|---|---|---|---|---|
| hero-garden-watering.jpg | learnersmontessori.co.uk/great-learners/images/act2.jpg | 2400×1600 (resized to 1800×1200 for delivery) | Nursery's own site photography | yes/none found | Home hero | Child using a spray bottle on garden herbs — matches "shared enclosed garden" / practical-life copy |
| activity-chef-hats.jpg | .../great-learners/images/act1.jpg | 2400×1600 → 1800×1200 | Nursery's own site | yes/none found | Our Nursery activities | Chef-hat dress-up roleplay — matches themed-activities copy |
| activity-christmas-show.jpg | .../great-learners/images/act6.jpg | 2400×1600 → 1800×1200 | Nursery's own site | yes/none found | Our Nursery activities | Child singing at mic on stage — matches "annual Christmas show" copy |
| baby-room-sensory-water.jpg | .../great-learners/images/13.png | 2400×1600 → 1800×1200 | Nursery's own site | yes/none found | Home + Our Nursery Baby Room | Baby with sensory water tray — matches Baby Room copy |
| preschool-art-share.jpg | .../great-learners/images/6.png | 2400×1600 → 1800×1200 | Nursery's own site | yes/none found | (kept in asset library; not placed on final pages — see note) | Pre-schooler showing artwork to a teacher |
| exterior-building.jpg | .../great-learners/gallery/pic1.jpg | 1300×867 | Nursery's own gallery | yes/none found | Home About section | Real exterior of the building on The Riding, "Great Learners" branded bins visible |
| garden-circle-time.jpg | .../great-learners/gallery/pic8.jpg | 1300×867 | Nursery's own gallery | yes/none found | Our Nursery activities (garden) | Outdoor circle time with staff member — matches garden/outdoor copy |
| garden-climbing-frame.jpg | .../great-learners/gallery/pic10.jpg | 1300×867 | Nursery's own gallery | yes/none found | Home Toddlers card | Children on garden climbing frame — matches garden copy |
| meals-snacktime.jpg | .../great-learners/gallery/pic4.jpg | 1300×867 | Nursery's own gallery | yes/none found | Our Nursery meals section | Children sharing fruit snack — matches meals/snack copy |
| mealtime-chef-roleplay.jpg | .../great-learners/gallery/pic27.jpg | 1300×867 | Nursery's own gallery | yes/none found | Our Nursery activities (themed weeks) | Chef dress-up serving roleplay — captioned as roleplay, not literal cook-prepared meals |
| practical-life-pink-tower.jpg | .../great-learners/gallery/pic2.jpg | 1300×867 | Nursery's own gallery | yes/none found | (kept in asset library; not placed — see note) | Children with Montessori Pink Tower |
| reading-corner.jpg | .../great-learners/gallery/pic6.jpg | 1300×867 | Nursery's own gallery | yes/none found | Our Nursery Toddlers section | Children reading in library corner — matches "cosy library" copy |
| music-area.jpg | .../great-learners/gallery/pic7.jpg | 1300×867 | Nursery's own gallery | yes/none found | (kept in asset library; not placed — see note) | Children with instruments in music area |
| writing-letter-s.jpg | .../great-learners/gallery/pic20.jpg | 733×1100 | Nursery's own gallery | yes/none found | Home + Our Nursery Pre-school section | Pre-schooler tracing a letter — matches Pre-school independence copy |
| favicon.svg | Original, hand-authored for this build | vector | N/A — not copied from the nursery's own shield/tree logo | n/a | Header/footer brand mark, favicon | Simple sprout-on-circle mark; deliberately distinct from the nursery's real logo (see Design Notes) |

Note: `preschool-art-share.jpg`, `practical-life-pink-tower.jpg` and `music-area.jpg` were downloaded, watermark-checked and kept in `assets/img/` as a slightly larger curated pool than what the final 3 pages ended up using, to give room to pick the strongest content-match per section without re-fetching. All three are clean, real, on-site photography and are safe to draw on if the site is extended later; they are not referenced by any current `<img>` tag.

Watermark check method: each candidate image was rendered full-size via the Read tool and visually inspected corner-to-corner; none carried a third-party photographer credit/watermark. All images came from the Great Learners branch's own `learnersmontessori.co.uk/great-learners/` page and gallery — no third-party press/editorial or customer-submitted Google-listing photos were needed.

## Design Notes
- Palette: "morning sky" — cerulean blue (#1F7A9E) primary + burnt-terracotta (#D8663F/#9C4426) accent on warm ivory. Full rationale, cross-portfolio distinctness check, and computed WCAG contrast notes are documented as a comment block in `assets/css/tokens.css`.
- Typography: Fredoka (display/headings) + Nunito Sans (body) via Google Fonts CDN, with a system-font fallback stack. Neither font is used elsewhere in this portfolio (checked via grep across sibling `index.html` files).
- Brand mark: original hand-authored SVG (sprout on a circle), not a copy of the nursery's real shield/tree logo — this is a redesign concept, not a scrape of their brand assets.
- Image layout pattern: wrapper `aspect-ratio` + `object-fit: cover` throughout (`.hero__media-frame`, `.split__media .frame`, `.classroom-card__media`), consistent single pattern per AGENTS.md.
- Risk notes: none outstanding. The one real defect found during build (see QA_REPORT.md) — a fixed-position mobile nav drawer inflating the document's horizontal scrollable area even when closed — was found and fixed during this build (added `overflow-x: hidden` to `html`/`body`), verified via a synthetic iframe-based multi-viewport harness since the shared multi-agent browser environment in this session made real window-resize QA tools (`preview_start`/`resize_window`) unreliable (see QA_REPORT.md Method note).

## Builder QA
- Contrast: 0 violations across all 3 pages × 3 breakpoints (mobile 360/390px, tablet 834px, desktop 1440px). One near-miss (`.quote__mark` decorative quotation glyph, 2.98:1 against a 3.0:1 large-text threshold) was fixed by switching it to the text-safe `--color-terracotta-deep` token.
- Upscale mobile: 0 violations, 0 broken images
- Upscale tablet: 0 violations, 0 broken images
- Upscale desktop: 0 violations, 0 broken images
- Broken images: none on any page/breakpoint
- Manual checks: dark-gradient CTA-band sections are flagged `needsManualCheck` by the automated script (it can't resolve gradient backgrounds) on all 3 pages — manually verified via screenshot: white text on the `--color-sky-deep` gradient, well clear of AA (matches the ≥8:1 contrast computed by hand in `tokens.css`'s comment block for that exact color pair).
