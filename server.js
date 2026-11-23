import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const app = express();
const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');
app.disable('x-powered-by');
app.use(express.static(publicDir, { setHeaders(res, filePath) {
  if (filePath.endsWith('sw.js') || filePath.endsWith('index.html')) res.setHeader('Cache-Control', 'no-cache');
}}));
app.get('/', (_req,res) => res.sendFile(path.join(publicDir,'index.html')));
export default app;
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  app.listen(port, '0.0.0.0', () => console.log(`Tereeza Speed running on port ${port}`));
}
