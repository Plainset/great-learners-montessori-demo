# Pipeline Status

Operational handoff only. `LEADS.md` and `OUTREACH_LOG.md` remain the source of truth.

- Current phase: Build complete, QA passed, committed locally. Not yet deployed, not yet drafted/sent.
- Last trusted commit: initial commit on `main` (see `git log`) — full 3-page site, tokens/main CSS, JS, curated real assets, BUILD_BRIEF.md, QA_REPORT.md
- Known untrusted state: none — working tree clean at handoff
- Next exact action: Deploy phase — create public GitHub repo `great-learners-montessori-demo` under Plainset, push, enable Pages (source/branch=main, path=/), confirm the live URL loads, then move to drafting outreach (see BUILD_BRIEF.md Pitch Hook for the verified observation to lead the email with)
- Deploy URL: none yet (not deployed in this phase, per instructions)
- Outreach state: not started — LEADS.md status still "New" for lead #48, needs updating to reflect this build once the top-level session logs it
- Flags for Alex:
  - This is a 3-branch family group (Budding Learners/Kingsbury, Little Learners/Edgware, Great Learners/Golders Green). This build covers Great Learners (Golders Green) only, by design — branding and copy make that scope explicit. Do not repurpose this build for the other two branches without re-scoping.
  - Real pitch hook available: the current live site's classroom-tab widget (Baby Room/Toddlers/Pre-school) is functionally broken — clicking between tabs never updates the visible content, it's stuck on "The Baby Room" regardless of which tab is selected. Good, concrete, verifiable observation to lead the cold email with.
  - One CSS defect was found and fixed during build (mobile nav drawer causing page-level horizontal scroll) — full detail in QA_REPORT.md Blocking Issues, already fixed and reverified, not a concern for the reviewer to re-litigate unless spot-checking.
