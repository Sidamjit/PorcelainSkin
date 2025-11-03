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

Both enquiry forms submit via [`formsubmit.co`](https://formsubmit.co/) and are preconfigured to deliver messages to `info@porcelainskin.co.nz`. Update the `action` attribute if you decide to switch to another inbox or automation service. Most modern static hosts (Netlify, Vercel, GitHub Pages, etc.) can serve this site without additional backend work.

## Hosting

Upload the contents of the `site/` folder to your preferred static host. If the provider expects an entry point named `index.html` at the root, deploy the files exactly as they appear in this directory. Update DNS records to point your domain to the new host when you're ready to go live.
