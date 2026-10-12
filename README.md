# Sherin — Digital Marketing Portfolio

Original navy-and-mint portfolio website for Sherin, a freelance digital marketer in Calicut.

## Files

- `dist/index.html` — page content and sections
- `dist/style.css` — styling and responsive layouts
- `dist/app.js` — navigation, reveal animations and article dialog
- `dist/sherin.jpg` — portrait extracted from the supplied reference video
- `vercel.json` — static hosting configuration

## Preview locally

Run `python3 -m http.server 8000 --directory dist` and open http://localhost:8000.

## Deploy on Vercel

Import this repository in Vercel. Use framework preset **Other**, no install or build command, and output directory **dist**. The included configuration supplies these settings. No environment variables are required.

## Edit content

Update copy, service details and the WhatsApp link in `dist/index.html`. Replace `dist/sherin.jpg` to update the portrait. Fonts load from Google Fonts with local fallback fonts.
