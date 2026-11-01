// Esegue la prova in Chromium senza schermo; blocca e registra ogni richiesta non locale.
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
const OUT = process.argv[2], URL = process.argv[3];
(async () => {
  const b = await chromium.launch(); const p = await b.newPage(); const ext = [], loc = new Set();
  await p.route('**/*', r => { const u = r.request().url(); if (u.startsWith('http://127.0.0.1:8766/')) { loc.add(u.slice(21)); return r.continue(); } if (u.startsWith('data:') || u.startsWith('blob:')) return r.continue(); ext.push(u); return r.abort(); });
  p.on('pageerror', e => console.error('pageerror', e.message)); p.on('console', m => { if (m.type() === 'error') console.error('console', m.text()); });
  await p.exposeFunction('saveImage', (n, d) => fs.writeFileSync(path.join(OUT, n), Buffer.from(d.split(',')[1], 'base64')));
  await p.goto(URL); await p.waitForFunction(() => window.ready === true);
  const r = await p.evaluate(() => window.runAll());
  const rep = { browser: b.version(), richieste_esterne_bloccate: ext, file_locali: [...loc], ...r };
  fs.writeFileSync(path.join(OUT, 'risultati.json'), JSON.stringify(rep, null, 1));
  console.log('esterne', ext, 'avvio OCR ms', r.avvioOcrMs);
  for (const x of r.res) console.log(x.id.padEnd(26), x.via.padEnd(34), String(x.ms).padStart(6) + 'ms', x.giusto ? 'GIUSTO ' : 'SBAGLIATO', 'trovati', JSON.stringify(x.trovati), 'letti', x.importi_letti.join(' '));
  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
