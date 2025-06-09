function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 6) + 1;
}

function lancarDados() {
  const dado1 = gerarNumeroAleatorio();
  const dado2 = gerarNumeroAleatorio();
  const soma = dado1 + dado2;

  document.getElementById("dado1").textContent = `Dado 1: ${dado1}`;
  document.getElementById("dado2").textContent = `Dado 2: ${dado2}`;
  document.getElementById("soma").textContent = `Soma dos dados: ${soma}`;
}

// Associa a função ao clique do botão
document.getElementById("botaoLancar").addEventListener("click", lancarDados);
