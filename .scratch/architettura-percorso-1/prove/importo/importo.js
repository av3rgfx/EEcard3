// Cerca gli importi attesi in un testo. Usato dalla pagina di prova e dal controllo in Node.
// Regola: un importo ha i centesimi (650,00 / 650.00 / 1.460,00) oppure è un intero accanto a € o EUR.
(function (root) {
  function normalizza(testo) {
    let t = testo.replace(/ /g, ' ');
    // confusioni tipiche del riconoscimento del testo dentro i numeri ("73O,OO"); due giri per le lettere vicine
    for (let i = 0; i < 2; i++) t = t
      .replace(/(?<=[\d.,])[Oo](?=[\d.,Oo])|(?<=[\d.,Oo])[Oo](?=[\d.,])|(?<=\d)[Oo](?![A-Za-z])/g, '0')
      .replace(/(?<=[\d.,])[lI](?=[\d.,])|(?<=\d)[lI](?=\d)/g, '1');
    // spazi spuri attorno al separatore dei decimali: "650 ,00"
    return t.replace(/(\d)\s+([,.])\s*(\d{2})(?!\d)/g, '$1$2$3');
  }
  function importi(testo) {
    const t = normalizza(testo), out = new Set();
    // con i centesimi
    const reCent = /(?<![\d.,])(\d{1,3}(?:[.' ]\d{3})+|\d+)[,.](\d{2})(?![\d])/g;
    for (const m of t.matchAll(reCent)) out.add(parseInt(m[1].replace(/[.' ]/g, ''), 10) * 100 + parseInt(m[2], 10));
    // interi accanto alla valuta: "€ 650", "650 EUR", "EUR 650"
    const reInt = /(?:€|EUR)\s?(\d{1,3}(?:[.']\d{3})+|\d+)(?![\d,.])|(?<![\d,.])(\d{1,3}(?:[.']\d{3})+|\d+)\s?(?:€|EUR)/gi;
    for (const m of t.matchAll(reInt)) out.add(parseInt((m[1] || m[2]).replace(/[.']/g, ''), 10) * 100);
    return out;
  }
  function trova(testo, attesi) { // attesi: { nome: centesimi }
    const visti = importi(testo);
    return Object.entries(attesi).filter(([, c]) => visti.has(c)).map(([n]) => n);
  }
  const api = { normalizza, importi, trova };
  if (typeof module !== 'undefined') module.exports = api; else root.Importo = api;
})(this);
