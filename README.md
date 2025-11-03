# Porcelain Skin Static Website

This repository contains a static rebuild of [porcelainskin.co.nz](https://www.porcelainskin.co.nz) designed for affordable hosting providers.

## Structure

The site lives in the `site/` directory and includes:

- `index.html` – home page with hero banner, service highlights, hours, and contact form.
- `services.html` – detailed service cards covering facials, massage, waxing, and cosmetic enhancements.
- `packages.html` – curated skincare packages adapted from the original site.
- `reviews.html` – client testimonials.
- `about.html` – brand story, map embed, and key contact details.
- `contact.html` – enquiry form and salon information.
- `shop.html` – simple retail grid for featured products.
- `assets/css/styles.css` – shared styling, colour palette, and responsive rules.

All imagery references the Wix CDN so the original visuals remain intact without storing large binaries in the repository. Update the `src` attributes if you prefer local copies.

## Contact Form

Both enquiry forms submit via [`formsubmit.co`](https://formsubmit.co/) and are preconfigured to deliver messages to `info@porcelainskin.co.nz`. Submissions are handled asynchronously so visitors remain on the page and receive a success/error message inline. Each successful submit generates a short reference like `PS-DDMMHHMMA1` (shared with the customer in the success notice and injected into the email subject alongside their phone number) so you can track conversations quickly. If JavaScript is disabled the native POST still works, falling back to FormSubmit’s default response.

The first submission from any new email address will trigger FormSubmit’s activation flow—look for the confirmation link sent to that inbox and click it once to start receiving enquiries. Update the `action` value or JavaScript endpoint if you switch to another inbox or automation service. Most modern static hosts (Netlify, Vercel, GitHub Pages, etc.) can serve this site without additional backend work.

## Hosting

Upload the contents of the `site/` folder to your preferred static host. If the provider expects an entry point named `index.html` at the root, deploy the files exactly as they appear in this directory. Update DNS records to point your domain to the new host when you're ready to go live.
