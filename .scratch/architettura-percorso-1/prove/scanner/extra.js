const { chromium } = require('playwright'); const fs = require('fs');
(async () => { const b = await chromium.launch(); const p = await b.newPage(); const ext = [];
  await p.route('**/*', r => { const u = r.request().url(); if (u.startsWith('http://127.0.0.1:8765/')) return r.continue(); ext.push(u); return r.abort(); });
  await p.goto(process.argv[2]); await p.waitForFunction(() => window.ready === true);
  await p.evaluate(() => new Promise(r => { if (window.cv && cv.Mat) r(); else cv.onRuntimeInitialized = r; }));
  const res = await p.evaluate(() => window.runExtra()); fs.writeFileSync(process.argv[3], JSON.stringify({ esterne: ext, res }, null, 1));
  console.log('esterne', ext); for (const r of res) console.log(r.caso.padEnd(18), r.misura.padEnd(10), 'conf', (r.conf ?? '-').toString().slice(0, 5).padEnd(6), 'err', r.err?.toFixed(2).padEnd(6), '| ridotta err', r.err_ridotta?.toFixed(2).padEnd(6), 'conf', (r.conf_ridotta ?? '-').toString().slice(0, 5), r.jscanify !== undefined ? '| jscanify ' + (r.jscanify?.toFixed(2)) : '');
  await b.close(); })();
