const buttonVerificar = document.getElementById('btnVerificar');
const resultadoFinal = document.getElementById('resultado');

buttonVerificar.addEventListener('click', () => {
  const numeroPerfeito = parseInt(document.getElementById('numero').value);

  if (isNaN(numeroPerfeito) || numeroPerfeito <= 0) {
    resultadoFinal.innerText = 'Por favor, insira um número inteiro positivo.';
    return;
  }

  let somaDivisores = 0;

  for (let i = 1; i < numeroPerfeito; i++) {
    if (numeroPerfeito % i === 0) {
      somaDivisores += i;
    }
  }

  if (somaDivisores === numeroPerfeito) {
    resultadoFinal.innerText = `${numeroPerfeito} é um número perfeito!`;
  } else {
    resultadoFinal.innerText = `${numeroPerfeito} não é um número perfeito.`;
  }
});
