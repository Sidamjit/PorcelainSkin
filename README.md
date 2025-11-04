# Porcelain Skin & Laser Static Site

A static rebuild of [porcelainskin.co.nz](https://www.porcelainskin.co.nz) designed for lightweight hosting while keeping the brand's look, content, and lead capture intact. All public files live under `site/` so you can deploy the folder as-is to most static hosts.

## Project Layout

- `site/index.html` - Home page with hero, video highlights, testimonials, studio info, and a contact form.
- `site/services.html` - End-to-end treatment overview with imagery for each service pillar.
- `site/packages.html` - Curated treatment bundles and pricing guidance.
- `site/about.html` - Brand story, booking CTAs, and an embedded studio video.
- `site/thank-you.html` - Friendly confirmation screen linked from FormSubmit's fallback flow.
- `site/assets/css/styles.css` - Shared palette, typography, responsive utilities, and layout rules.
- `site/assets/js/` - Client-side enhancements:
  - `testimonial-rotator.js` builds and cycles through Fresha review quotes with pause-on-hover and dot navigation.
  - `nav-toggle.js` handles the mobile menu, deep-link scroll to `#contact-section`, and focus management.
  - `formsubmit-handler.js` validates fields, generates enquiry IDs, and submits forms to FormSubmit via AJAX.
- `site/assets/images/` - Local images, video loops, and iconography referenced throughout the pages.

## Interactive Behaviour

- **Responsive navigation** collapses into a toggle on small screens and closes automatically after link selection.
- **Testimonials carousel** rotates curated Fresha reviews every 7 seconds, supports manual controls, and pauses on hover/focus for accessibility.
- **Contact form** validates email/phone input, creates a subject line that includes the generated enquiry reference and phone number, submits via [`formsubmit.co`](https://formsubmit.co/), and notifies visitors inline without leaving the page.
- **Deep linking** to `index.html#contact-section` smoothly scrolls to the form and focuses the first field for faster lead capture.

## Contact Form Notes

- Messages are sent to `info@porcelainskin.co.nz`. Update the `action` attribute (and optional thank-you copy) if you change inboxes.
- FormSubmit requires a one-time verification email the first time a new address receives a submission, so watch for it in that inbox.
- Without JavaScript the form still posts directly to FormSubmit, which can redirect to `thank-you.html` by configuring the service's `_next` setting.

## Working Locally

1. Open `site/index.html` directly in a browser, **or**
2. Serve the `site/` directory (for example: `npx serve site`) so relative links and the thank-you page work as they would in production.

Fonts load from Google Fonts; no build tooling or package installation is required.

## Deploying

Upload the contents of `site/` to your static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.). Ensure `index.html` remains at the deployment root, keep asset paths intact, and point your domain's DNS at the host when you're ready to launch.
