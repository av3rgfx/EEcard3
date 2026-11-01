// Esegue la prova in Chromium senza schermo; blocca e registra ogni richiesta non locale.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const OUT = process.argv[2], URL = process.argv[3];
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const richieste = [], esterne = [];
  await page.route('**/*', r => {
    const u = r.request().url();
    if (u.startsWith('http://127.0.0.1:8765/') || u.startsWith('data:') || u.startsWith('blob:')) { richieste.push(u.replace('http://127.0.0.1:8765', '')); return r.continue(); }
    esterne.push(u); return r.abort();
  });
  page.on('console', m => { if (m.type() === 'error') console.error('console:', m.text()); });
  page.on('pageerror', e => console.error('pageerror:', e.message));
  await page.exposeFunction('saveImage', (name, dataUrl) => fs.writeFileSync(path.join(OUT, name), Buffer.from(dataUrl.split(',')[1], 'base64')));
  await page.goto(URL);
  await page.waitForFunction(() => window.ready === true, null, { timeout: 120000 });
  const risultati = await page.evaluate(() => window.runAll());
  const video = await page.evaluate(() => window.runVideo());
  const editor = await page.evaluate(() => window.inspectEditor());
  const report = { browser: browser.version(), richieste_locali: [...new Set(richieste)], richieste_esterne_bloccate: esterne, risultati, video, editor };
  fs.writeFileSync(path.join(OUT, 'risultati.json'), JSON.stringify(report, null, 1));
  console.log(JSON.stringify({ browser: report.browser, esterne, video, editor_live: editor.live, tastiera: editor.tastiera }, null, 1));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
