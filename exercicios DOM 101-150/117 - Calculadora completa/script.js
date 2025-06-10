document.getElementById('btnCalcular').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operacao = document.getElementById('operacao').value;
  const resultado = document.getElementById('resultado');

  if (isNaN(num1)) {
    resultado.innerText = 'Digite ao menos o número 1.';
    return;
  }

  let result;

  switch (operacao) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultado.innerText = 'Divisão por zero não permitida.';
        return;
      }
      result = num1 / num2;
      break;
    case '^':
      result = Math.pow(num1, num2);
      break;
    case 'raiz':
      if (num1 < 0) {
        resultado.innerText = 'Raiz de número negativo não é real.';
        return;
      }
      result = Math.sqrt(num1);
      break;
    default:
      resultado.innerText = 'Operação inválida.';
      return;
  }

  resultado.innerText = `Resultado: ${result}`;
});
