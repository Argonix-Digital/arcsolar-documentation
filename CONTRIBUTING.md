# Maintain the ArcSolar guides

These are user guides and operating procedures, not API reference documentation.

## Editorial standard

- Start with the user's outcome and the screen to open.
- Use the exact visible button and tab labels, short numbered steps and a success check.
- Keep advanced detail on a linked page rather than making the first-use path longer.
- Distinguish live, beta, preview, unavailable and coming-soon behaviour.
- End tool guides with an honest ArgonixIntelligence explanation. Do not invent AI actions.
- Use support@arcsolar.com.au for all support and sign-offs.
- Check sensitive claims against source behaviour: acceptance is not payment, finance approval is not disbursement, certificate registration is not settlement, and installed is not closed out.
- Do not publish credentials, private customer URLs, customer data, internal cost/margin or operational identifiers.

## Updating a workflow

1. Read the current application implementation and inspect the relevant screen.
2. Check the deployed release and permissions. Onboarding currently documents the qa organisation flow.
3. Update the guide, related cross-links and docs.json navigation together.
4. Capture fictional/demo screenshots; inspect every image before publishing. Label preview examples accurately.
5. Run `npx mint validate` and `npx mint broken-links`.
6. Preview desktop and narrow layouts, check image rendering, then review the Git diff.

## Structure and research

The information architecture follows the customer journey: setup, integrations, customers, quoting, delivery, reporting and reference. Task-focused pages use procedures; comparison tables explain related states and payment concepts.

Reference patterns reviewed:

- [Linear Docs](https://linear.app/docs) and [Start Guide](https://linear.app/docs/start-guide): compact topic navigation and separate starting paths.
- [Mintlify content templates](https://www.mintlify.com/docs/guides/content-templates): outcome, prerequisites, steps, verification and related tasks.
- [Stripe PayTo documentation](https://docs.stripe.com/payments/payto): mandate approval, separate payment confirmation and bank limitations.

These are design references, not a claim that a universal documentation rating exists. ArcSolar copy is original.

## Source and screenshot scope

Initial content was inspected on 12 September 2026. The organisation onboarding flow was read from qa commit `a2782a00e1ceaeb3022d9a9999f6dd0f37b9b55a`. Other guides were checked against the available application source and selected demo screens. This is not an assertion that every provider flow was transacted end to end.

The six workflow PNGs in `images/` were recaptured from the compiled ArcSolar fictional demo on 12 September 2026 at a 1440 × 1000 CSS viewport and 2× device pixel ratio (2880 × 2000 native pixels). They retain simulation labels. The quote image shows the demo Actions menu, not an operational revision editor. Never substitute live customer screenshots.

## Page metadata and capture standard

- Give every guide a relevant Font Awesome icon, short `sidebarTitle`, unique outcome-led title and description, and a small set of useful search `keywords`.
- Keep the default layout and automatically generated social-preview image unless a page needs an explicit exception. Do not add decorative tags, hidden flags or external redirects to ordinary guides.
- Capture lossless PNG at 2× density or better from a compiled demo with fictional data. Do not upscale, reconstruct or AI-edit interface screenshots.
- Before capture, ensure no Next.js development indicator, Vercel feedback toolbar, browser chrome or error overlay is visible. Keep legitimate app controls, source attribution and simulation labels.
- Wait for fonts, images and transitions to finish. Inspect the saved full-resolution image and ensure the caption and alt text describe the actual capture.

The build metadata and source commits are maintenance evidence, not customer-facing product version claims.
