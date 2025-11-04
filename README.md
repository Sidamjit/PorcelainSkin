# Porcelain Skin & Laser - Marketing Microsite

Visit the live site: [porcelainskin.co.nz](https://www.porcelainskin.co.nz)

Designed and delivered a modern, high-end web experience for Porcelain Skin, a beauty salon that is gaining popularity. The design direction came from researching the studio’s core audience — women across age groups seeking calm, confidence-focused treatments — which led to a visual style centered on soft contrast, generous spacing, and warm editorial imagery instead of generic template layouts.

The previous site ran on a Wix plan costing ~$850 USD every two years. This custom build is faster, easier to navigate, more brand-aligned, and avoids ongoing platform fees. The studio has already reported excellent client feedback describing the site as “clean,” “premium,” and “much easier to use.”

## Why This Project Stands Out

- **Client-centered UX:** Navigation prioritises high-intent actions (call, book, directions) and keeps social links reliable on iOS Chrome, removing a friction point common in beauty sites.
- **Warm, inclusive styling:** The visual system blends serif typography, soft gradients, and spa imagery to resonate with both first-time visitors and long-term clients.
- **Performance-first delivery:** No frameworks, zero third-party bundles, and asynchronous form submits maintain a snappy feel on mid-range mobiles.
- **Conversion-ready storytelling:** Services, skincare packages, testimonials, and brand story are structured as reusable modules, making it easy to scale or re-sequence content later.
- **Operational savings:** Owning the codebase removes Wix lock-in while retaining features the team relies on: testimonials, booking CTAs, and lead capture.

## Tech Snapshot

| Layer     | Approach                                                                  |
|-----------|---------------------------------------------------------------------------|
| Markup    | Hand-authored HTML5 with componentised sections                           |
| Styling   | Vanilla CSS with custom properties, mobile-first breakpoints, no pre/post processors |
| Behaviour | Lightweight ES6 modules for navigation, testimonial rotation, and form handling |
| Hosting   | Static-host friendly; includes `CNAME` for custom-domain providers        |

## Architecture Overview

```text
/                    Project root
|-- index.html        Hero, testimonials, contact capture
|-- about.html        Brand story and salon overview
|-- services.html     Treatment pillars with media
|-- packages.html     Skincare programmes and CTAs
|-- thank-you.html    Fallback confirmation page
|-- favicon.ico       Site icon
|-- assets/
|   |-- css/styles.css            Core layout, typography, responsive rules
|   |-- js/nav-toggle.js          Mobile nav, deep-link focus, iOS Chrome guard
|   |-- js/testimonial-rotator.js Accessible carousel with manual controls
|   |-- js/formsubmit-handler.js  Validation, AJAX submission, enquiry ID generation
|   |-- images/                   Optimised imagery, video loops, icons
|-- CNAME              Custom domain mapping
```

## Results

- ~$850 USD saved every 2 years for the business

- Clearer service explanation, improved booking clarity

- Feedback describing the site as “premium,” “clean,” and “so much easier to use”

## License & Usage

This project is licensed under CC BY-NC-ND 4.0.
The design and code may not be reused, modified, or redistributed commercially without permission.

All copy, imagery, and branding remain the property of Porcelain Skin & Laser.
