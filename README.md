# Memorra v1.5 — React + Vite

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## WhatsApp
The number is configured centrally in `src/data/site.js` as `919787866076` for +91 97878 66076. Update that single value to change all WhatsApp links.

## v1.5 additions
- Giant animated Memorra wordmark and logo hero
- Scroll-linked parallax and floating elements
- Responsive mobile navigation
- Product-specific WhatsApp enquiry messages
- Custom order WhatsApp flow and floating chat button
- Interactive product favourite buttons and hover states

Before launch, replace gallery placeholders with real photos, sample testimonials with approved exact reviews, and update the email link in `src/sections/Contact.jsx`. Admin dashboard is not included.


## Email contact
Business email is `vithyaasrict@gmail.com` in `src/data/site.js`. The email card opens a pre-addressed email. The contact form prepares a message in the visitor's email app; it does not automatically send email. For direct inbox delivery without an email app, connect EmailJS or a backend endpoint.

## Add gallery photos
1. Create `public/images/gallery/`.
2. Copy photos into that folder, e.g. `chocolate-bouquet.jpg`.
3. Open `src/sections/Gallery.jsx`.
4. Add `{ src: '/images/gallery/chocolate-bouquet.jpg', alt: 'Chocolate bouquet' }` to the `photos` array.
5. Save; Vite refreshes automatically.
