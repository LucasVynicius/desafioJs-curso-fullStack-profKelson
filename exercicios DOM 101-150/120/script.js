let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

document.getElementById('btnAdivinhar').addEventListener('click', () => {
  const palpite = Number(document.getElementById('palpite').value);
  const mensagem = document.getElementById('mensagem');

  if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
    mensagem.textContent = 'Digite um número entre 1 e 100.';
    return;
  }

  tentativas--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = `🎉 Acertou! O número era ${numeroSecreto}.`;
    reiniciar();
  } else if (tentativas === 0) {
    mensagem.textContent = `❌ Fim de jogo! O número era ${numeroSecreto}.`;
    reiniciar();
  } else {
    mensagem.textContent = `Errado! Tente um número ${palpite < numeroSecreto ? 'maior' : 'menor'}. Tentativas restantes: ${tentativas}`;
  }

  document.getElementById('palpite').value = '';
});

const reiniciar = () => {
  setTimeout(() => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 10;
    document.getElementById('mensagem').textContent = 'Novo jogo iniciado! Tente novamente.';
  }, 3000);
}
