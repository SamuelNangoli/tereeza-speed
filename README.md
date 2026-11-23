# Tereeza Speed PWA

A branded installable Progressive Web App with a network health advisor.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000. The browser treats localhost as a secure context for PWA development.

## Deploy on Vercel

Push the entire project to GitHub. Import it in Vercel with Framework Preset **Other**, Root Directory set to the folder containing package.json, and default build settings. The Express entry point is server.js and exports the app. Test the deployed URL before adding speed.trenttech.online in Vercel Domains and copying Vercel's specified CNAME into Namecheap DNS.

## PWA behavior

- `public/manifest.webmanifest` defines name, theme, icons, start URL, standalone mode.
- `public/sw.js` caches the app shell only. Opening the installed app offline is supported, but speed testing requires an internet connection.
- The optional Install button appears only when the browser fires `beforeinstallprompt`; iOS Safari users can use Share > Add to Home Screen.
- Speed tests are remote requests to Cloudflare. The service worker deliberately does not intercept or cache those requests.
- Measurements are not guaranteed to match Fast.com; confirm browser CORS and endpoint behavior and validate against other tests before public launch.
- For updates to cached shell assets, change the CACHE name in `public/sw.js`.
