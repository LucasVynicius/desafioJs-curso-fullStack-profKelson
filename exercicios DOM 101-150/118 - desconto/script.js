const produtosDiv = document.getElementById('produtos');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');

// Adiciona novo campo de produto e preço
btnAdicionar.addEventListener('click', () => {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = `
    <input type="text" class="nome" placeholder="Produto">
    <input type="number" class="preco" placeholder="Preço">
  `;
  produtosDiv.appendChild(item);
});

// Calcula total e aplica desconto
btnCalcular.addEventListener('click', () => {
  const precos = document.querySelectorAll('.preco');
  let total = 0;

  precos.forEach(input => {
    const valor = parseFloat(input.value);
    if (!isNaN(valor) && valor > 0) {
      total += valor;
    }
  });

  if (total === 0) {
    resultado.innerText = 'Insira preços válidos.';
    return;
  }

  let desconto = 0;

  if (total > 100) {
    desconto = total * 0.10;
  }

  const totalComDesconto = total - desconto;

  resultado.innerHTML = `
    Total: R$ ${total.toFixed(2)} <br>
    Desconto: R$ ${desconto.toFixed(2)} <br>
    Total com desconto: R$ ${totalComDesconto.toFixed(2)}
  `;
});
