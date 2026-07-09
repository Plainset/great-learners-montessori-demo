# QA Report

Use exact pass/fail evidence, not prose. A reviewer may use the report as a map, but still verifies blocking checks independently.

## Pages Checked
- index.html (Home)
- our-nursery.html (Our Nursery)
- contact.html (Visit & Contact)

## Method note
The shared browser environment for this session runs multiple concurrent agents' preview servers and tabs in the same underlying browser (confirmed: `preview_start` refused with "Maximum 5 servers per worktree", and `resize_window`/`chrome-devtools-mcp` "selected page" resizing proved unreliable — repeated resize calls did not change the measured `window.innerWidth` of this build's tab, and once even returned a viewport size that matched a different concurrent session's page). To get trustworthy per-breakpoint measurements anyway, `.pipeline/qa/contrast-audit.js` and `.pipeline/qa/upscale-audit.js` were run against a same-origin `<iframe>` injected into the loaded page, resized to exact mobile/tablet/desktop pixel widths (this fully controls the iframe's layout viewport regardless of the outer window), with `[data-reveal]` elements force-revealed and `<details>` force-opened first so off-screen/collapsed content is still checked. Screenshots (2, one desktop one mobile) were taken directly against the live server for a final visual sanity check.

## Audit Results
| Check | Result | Evidence |
|---|---|---|
| Contrast audit — index.html | PASS (0 violations) | mobile 390px: 80 checked, 0 violations, 6 manual-check (dark CTA gradient); tablet 834px: 80 checked, 0/6; desktop 1440px: 81 checked, 0/6 |
| Contrast audit — our-nursery.html | PASS (0 violations) | mobile: 97 checked, 0 violations, 10 manual-check; tablet: 97 checked, 0/10; desktop: 98 checked, 0/10 |
| Contrast audit — contact.html | PASS (0 violations) | mobile: 77 checked, 0 violations, 3 manual-check; tablet: 77/0/3; desktop: 78/0/3 |
| Upscale mobile (390px) | PASS | index: 6/6 images checked, 0 violations, 0 broken, 0 aspect mismatch; our-nursery: 8/8, 0/0/0; contact: 1/1, 0/0/0 |
| Upscale tablet (834px) | PASS | index: 6/6, 0/0/0; our-nursery: 8/8, 0/0/0; contact: 1/1, 0/0/0 |
| Upscale desktop (1440px) | PASS | index: 6/6, 0/0/0; our-nursery: 8/8, 0/0/0; contact: 1/1, 0/0/0 |
| Broken images | PASS | 0 across every page × breakpoint combination above |
| Aspect mismatch advisory | PASS | 0 flagged anywhere |

## Manual Checks
| Check | Result | Notes |
|---|---|---|
| Text on photo | PASS | Only text-on-photo instance is the `.hero__badge` card, which sits on a solid white surface (not directly on the image) — no scrim needed |
| Gradient/::before backgrounds | PASS (manually verified) | `.section--dark` CTA bands use `linear-gradient(in oklch to bottom right, var(--color-sky-deep), color-mix(in oklch, var(--color-sky-deep) 82%, black))` — both gradient stops are dark; white text measured ≥8:1 against `--color-sky-deep` by hand in `tokens.css`'s contrast-notes comment, and the darker gradient stop only increases contrast further. Confirmed visually via screenshot — clearly legible. |
| Image/content match | PASS | Every placed image's caption/alt text matches what the photo actually shows (verified by viewing each image directly before placement) — see BUILD_BRIEF.md Asset Manifest "Copy match" column |
| Fabricated claims | PASS | Every factual claim traces to BUILD_BRIEF.md's Allowed Facts table with a source URL; uncertain items (fees, exact Ofsted report prose, staff ratios) are listed in Do Not Claim and were not used |
| Mobile layout | PASS (after fix) | See Blocking Issues — one real defect found and fixed |

## Blocking Issues
| Issue | Evidence | Required fix |
|---|---|---|
| Page-level horizontal scroll on mobile/tablet (all 3 pages) | `document.documentElement.scrollWidth` (675px) exceeded `clientWidth` (360px) even with the mobile nav drawer closed. Isolated by disabling `.nav__menu` (`display:none`), which returned `scrollWidth` to 360 — confirmed the `position:fixed` + `transform:translateX(100%)` off-canvas drawer's transformed box was extending the document's scrollable-overflow region, letting the whole page drag sideways | Added `overflow-x: hidden` to both `html` and `body` in `assets/css/main.css` (documented inline with the reasoning) |

## Advisory Issues
- None outstanding.

## Fixed Verification
| Issue | Fix | Recheck result |
|---|---|---|
| Page-level horizontal scroll (mobile nav drawer) | `overflow-x: hidden` added to `html`, `body` in `assets/css/main.css` | Re-ran the full-DOM overflow scan at 320px, 360px and 375px widths on all 3 pages post-fix: `documentElement.scrollWidth === clientWidth` on every page/width combination; 0 elements with `scrollWidth > clientWidth` anywhere outside the (now-harmless, internally-measured-only) `.site-header` element itself. Also spot-checked that `position: sticky` on `.site-header` is unaffected — `overflow-x` alone does not change the sticky element's scrolling axis (`overflow-y`) |
| `.stat-item__num` text overflow ("Outstanding" at mobile width) | Reduced clamp minimum (`clamp(1.3rem, 1.6vw + 0.85rem, 2.1rem)`), added `overflow-wrap: anywhere; word-break: break-word;` to `.stat-item__num`/`.stat-item__label`, and confirmed `.stat-item` has `min-width: 0` (grid-child text-blowout guard per AGENTS.md) | Re-ran full-DOM overflow scan at 320px width — 0 offenders anywhere on the page (previously: `.stat-item`/`.stat-item__num` at 134px scrollWidth vs 116px clientWidth) |
| `.quote__mark` decorative quote-glyph contrast (2.98:1 vs 3.0:1 large-text threshold) | Changed color from `--color-terracotta` (decorative-only token) to `--color-terracotta-deep` (text-safe, 6.07:1+ on paper) | Re-ran contrast audit on index.html — 0 violations (previously 1) |

## Verdict
PASS
