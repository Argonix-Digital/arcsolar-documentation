// High-fidelity docs screenshots from demo.arcsolar.com.au (fictional data).
// Captures at 3x device scale as lossless PNG, cropped to the part each page talks about.
// Usage: npm i --no-save playwright && npx playwright install chromium
//        node scripts/screenshots/capture.mjs   (writes to images/v2/)
import { chromium } from 'playwright';
const out = new URL('../../images/v2/', import.meta.url).pathname.replace(/\/$/, '');
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 3, colorScheme: 'light' });
const p = await ctx.newPage();
const go = async (u) => { await p.goto('https://demo.arcsolar.com.au' + u, { waitUntil: 'networkidle', timeout: 90000 }); await p.waitForTimeout(2000);
  const c = p.getByRole('button', { name: 'Close', exact: true }); if (await c.count()) { await c.first().click(); await p.waitForTimeout(600); } };
globalThis.p = p; globalThis.go = go; globalThis.out = out;
const steps = (await import('./shots.mjs')).default;
await steps();
await b.close();
