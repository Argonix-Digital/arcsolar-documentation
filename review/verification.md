# Docs redesign verification

Verified on 21 October 2026.

- Mintlify build validation: passed.
- Mintlify internal broken-link check: passed, with no skipped files.
- Git whitespace check: passed.
- Changelog: byte-for-byte unchanged from the current `origin/main` snapshot.
- All 34 hidden agent-reference blocks: retained exactly.
- Fourteen representative routes rendered with non-empty content and no new console errors, covering provider previews, reporting variants, brand prices, the FAQ, SLD and onboarding.
- Lesson checklists persisted three checked items through a reload; the course overview reported one completed lesson. Test checks were restored afterwards.
- Native search opens from the new icon. Search results need Mintlify CLI authentication in this local preview; the hosted index has not been verified for this branch.
- Desktop and mobile layouts and light/dark colours were inspected. Native navigation and contextual controls remain in use.
- A clean-browser REA check caught a local preview asset failure after the Mintlify validator and rebase. Restarting the preview fixed it. Fresh CSS and logo requests returned HTTP 200 before recapturing all three local views.

## Fresh REA local captures

All selected captures report complete artifacts and termination of their owned temporary browser process.

| View | Viewport | Evidence ID | Local screenshot |
| --- | --- | --- | --- |
| Index | 1440 × 1000 | `ev_0ea5ee39237f114cb623f5653af6da5b55534d2589646229fee71d7ec02b7f04` | `/tmp/arcsolar-docs-home-final.png` |
| Quote article | 1440 × 1000 | `ev_5899b07f23e4fc94a1c3476b3715a2c2123c791c9ac6d1dc7f67ca8945c18850` | `/tmp/arcsolar-docs-article-final.png` |
| Quote article | 390 × 844 | `ev_2c0665cc21450eaa657a9cdd120d9b9433fd119a25508f6cc0a02e9fe8e99645` | `/tmp/arcsolar-docs-mobile-final.png` |

The local captures prove the local rendering only. The branch has not been merged or published, so hosted deployment, hosted search and production rendering remain release checks.
