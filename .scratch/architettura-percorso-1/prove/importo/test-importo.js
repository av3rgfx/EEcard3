// Controllo minimo della regola sugli importi (node test-importo.js).
const assert = require('assert');
const { importi, trova } = require('./importo.js');
const A = { canone: 65000, oneri: 8000, totale: 73000 };
const casi = [
  ['Importo: EUR 730,00', ['totale']],
  ['Importo 650.00 €', ['canone']],
  ['€ 730', ['totale']],
  ['730 EUR', ['totale']],
  ['Totale 1.460,00 €', []],          // due mesi: non è un importo atteso
  ['Totale da pagare 65,00 €', []],    // 65 non è 650
  ['Distanza 650 km', []],             // intero senza valuta: ignorato
  ['CAP 00650 Roma', []],
  ['Importo: 73O,OO EUR', ['totale']], // O letta al posto di 0
  ['Importo 650 ,00', ['canone']],
  ['Commissioni 1,00 - Importo 80,00', ['oneri']],
];
for (const [t, atteso] of casi) assert.deepStrictEqual(trova(t, A), atteso, t);
assert.ok(importi('1.460,00').has(146000));
console.log('ok', casi.length, 'casi');
