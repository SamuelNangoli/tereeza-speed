# Tereeza Speed V2

Uses the supplied official Tereeza logo and favicon. The browser now sends test requests to `https://speed.cloudflare.com` rather than `localhost`, so it measures an external internet path.

## Run

```bash
npm install
npm start
```

Open http://localhost:3000.

## Important limitations

- This is an initial remote-speed-test prototype, not a calibrated benchmark. It uses small sequential transfers, so especially fast connections can be underestimated; short requests can be influenced by latency and HTTP overhead.
- Results need not match Fast.com: Cloudflare and Netflix have different server paths and methodologies.
- The remote service may change its endpoints or CORS policy; the page will show an error instead of a fake result if requests fail. Check the browser console for details.
- Upload duration is timed through the response and may include server response latency.
- Do not launch a public high-traffic service relying on a third-party testing endpoint without reviewing its terms and capacity. For production, deploy a geographically suitable dedicated test server and calibrate results.
- The local Express server serves only the UI and does not measure speed.
