document.getElementById('btnCalcular').addEventListener('click', () => {
  const taxa = parseFloat(document.getElementById('taxa').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(taxa) || taxa <= 0) {
    resultado.innerText = 'Por favor, insira uma taxa de juros válida (maior que 0).';
    return;
  }

  const taxaDecimal = taxa / 100;
  const tempo = Math.log(2) / Math.log(1 + taxaDecimal);

  resultado.innerText = `Com uma taxa de ${taxa}% ao ano, o investimento dobrará em aproximadamente ${tempo.toFixed(2)} anos.`;
});
