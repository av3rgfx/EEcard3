// Genera documenti inventati (PDF con testo, PDF di sole immagini, PNG) con Chromium. Nessun dato vero.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const OUT = process.argv[2]; fs.mkdirSync(OUT, { recursive: true });
const css = `body{font-family:Arial,Helvetica,sans-serif;margin:40px;color:#111}h1{font-size:22px}table{border-collapse:collapse;width:100%;font-size:15px}td{padding:7px;border-bottom:1px solid #ccc}.n{text-align:right;font-weight:bold}.small{font-size:11px;color:#555}`;
const banca = (importo, extra = '') => `<style>${css}</style><h1>Banca di Prova S.p.A.</h1><p class=small>Documento inventato per una prova. Nessun dato è vero.</p>
<h2 style="font-size:18px">Contabile di bonifico SEPA - Esito: eseguito</h2><table>
<tr><td>Ordinante</td><td>Giulia Bianchi (inventata)</td></tr><tr><td>IBAN ordinante</td><td>IT00 A000 0000 0000 0000 0000 001</td></tr>
<tr><td>Beneficiario</td><td>Mario Rossi (inventato)</td></tr><tr><td>IBAN beneficiario</td><td>IT00 B000 0000 0000 0000 0000 002</td></tr>
<tr><td>Data esecuzione</td><td>01/11/2026</td></tr><tr><td>Importo</td><td class=n>${importo}</td></tr><tr><td>Commissioni</td><td class=n>EUR 1,00</td></tr>
<tr><td>Causale</td><td>Canone novembre 2026 Via dei Tigli 14 int. 3</td></tr><tr><td>TRN</td><td>0000PROVA0000000000000000001</td></tr>${extra}</table>`;
const app = `<style>${css} .big{font-size:40px;font-weight:bold;text-align:center;margin:30px}</style><h1 style="text-align:center">Bonifico inviato</h1><p class=small style="text-align:center">App di prova - dati inventati</p>
<div class=big>650,00 €</div><table><tr><td>A</td><td>Mario Rossi (inventato)</td></tr><tr><td>Da</td><td>Conto di Giulia Bianchi (inventata)</td></tr>
<tr><td>Quando</td><td>1 novembre 2026, 09:41</td></tr><tr><td>Causale</td><td>Affitto novembre</td></tr><tr><td>Costo</td><td>0,00 €</td></tr></table>`;
const DOCS = [
  { id: 'A-contabile-pdf', tipo: 'pdf', html: banca('EUR 730,00'), atteso: ['totale'] },
  { id: 'B-app-pdf', tipo: 'pdf', html: app, atteso: ['canone'] },
  { id: 'C-punto-pdf', tipo: 'pdf', html: banca('€ 730.00'), atteso: ['totale'] },
  { id: 'D-scansione-pdf', tipo: 'pdf-immagine', html: banca('EUR 730,00'), atteso: ['totale'] },
  { id: 'E-screenshot-png', tipo: 'png', html: app, atteso: ['canone'], w: 390 },
  { id: 'F-foto', tipo: 'foto', html: banca('EUR 730,00'), atteso: ['totale'], foto: { rot: 2.5, ombra: .35, larg: 1500 } },
  { id: 'G-foto-difficile', tipo: 'foto', html: banca('EUR 730,00'), atteso: ['totale'], foto: { rot: 4, ombra: .55, larg: 900 } },
  { id: 'M-foto-pessima', tipo: 'foto', html: banca('EUR 730,00'), atteso: ['totale'], foto: { rot: 8, ombra: .7, larg: 700, blur: 2 } },
  { id: 'N-foto-lontana', tipo: 'foto', html: banca('EUR 730,00'), atteso: ['totale'], foto: { rot: 3, ombra: .4, larg: 450, blur: 1 } },
  { id: 'O-sbagliato-referto-foto', tipo: 'foto', atteso: [], foto: { rot: 3, ombra: .4, larg: 1200 }, html: `<style>${css}</style><h1>Referto di laboratorio (inventato)</h1><table><tr><td>Glucosio</td><td>92 mg/dl</td></tr><tr><td>Colesterolo totale</td><td>180 mg/dl</td></tr><tr><td>Ticket pagato</td><td class=n>36,15 €</td></tr></table>` },
  { id: 'H-sbagliato-bolletta-pdf', tipo: 'pdf', atteso: [], html: `<style>${css}</style><h1>Bolletta luce di prova</h1><p class=small>Documento inventato.</p><table><tr><td>Periodo</td><td>settembre-ottobre 2026</td></tr><tr><td>Consumo</td><td>650 kWh</td></tr><tr><td>Quota energia</td><td class=n>48,20 €</td></tr><tr><td>Oneri di sistema</td><td class=n>9,30 €</td></tr><tr><td>Totale da pagare</td><td class=n>65,00 €</td></tr></table>` },
  { id: 'I-sbagliato-referto-png', tipo: 'png', atteso: [], w: 800, html: `<style>${css}</style><h1>Referto di laboratorio (inventato)</h1><table><tr><td>Glucosio</td><td>92 mg/dl</td></tr><tr><td>Colesterolo totale</td><td>180 mg/dl</td></tr><tr><td>Pressione</td><td>120/80</td></tr><tr><td>Data</td><td>30/10/2026</td></tr></table>` },
  { id: 'J-sbagliato-biglietto-pdf', tipo: 'pdf', atteso: [], html: `<style>${css}</style><h1>Biglietto treno di prova</h1><table><tr><td>Tratta</td><td>Milano - Napoli, 650 km</td></tr><tr><td>Prezzo</td><td class=n>73,50 €</td></tr><tr><td>Posto</td><td>Carrozza 7, posto 730</td></tr></table>` },
  { id: 'K-parziale-pdf', tipo: 'pdf', html: banca('EUR 300,00'), atteso: [] },
  { id: 'L-due-mesi-pdf', tipo: 'pdf', html: banca('EUR 1.460,00'), atteso: [] },
];
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ deviceScaleFactor: 2, viewport: { width: 800, height: 1100 } });
  await p.route('**/*', r => r.request().url().startsWith('data:') || r.request().url() === 'about:blank' ? r.continue() : r.abort());
  for (const d of DOCS) {
    if (d.tipo === 'pdf') { await p.setContent(d.html); await p.pdf({ path: path.join(OUT, d.id + '.pdf'), format: 'A4' }); }
    else {
      await p.setViewportSize({ width: d.w || 800, height: 1100 }); await p.setContent(d.html);
      const png = await p.screenshot({ fullPage: true });
      if (d.tipo === 'pdf-immagine') {
        await p.setContent(`<style>@page{margin:0}body{margin:0}</style><img style="width:210mm" src="data:image/png;base64,${png.toString('base64')}">`);
        await p.pdf({ path: path.join(OUT, d.id + '.pdf'), format: 'A4', printBackground: true });
      } else fs.writeFileSync(path.join(OUT, d.id + '.png'), png);
      await p.setViewportSize({ width: 800, height: 1100 });
    }
  }
  fs.writeFileSync(path.join(OUT, 'documenti.json'), JSON.stringify(DOCS.map(({ html, ...r }) => ({ ...r, file: r.id + (r.tipo.startsWith('pdf') ? '.pdf' : '.png') })), null, 1));
  console.log('generati', DOCS.length); await b.close();
})();
