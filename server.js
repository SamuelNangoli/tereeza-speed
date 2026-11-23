import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "public");

app.disable("x-powered-by");

// Serve CSS, JavaScript, images and other assets
app.use(express.static(publicDir, {
  setHeaders(res) {
    res.setHeader("Cache-Control", "no-cache");
  }
}));

// Serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

// Export Express app for Vercel
export default app;

// Run locally
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Tereeza Speed running on port ${PORT}`);
  });
}
