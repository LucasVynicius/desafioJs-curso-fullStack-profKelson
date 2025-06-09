const button = document.getElementById('btnConverter');

button.addEventListener('click', () => {
    const decimal = document.getElementById('decimal').value;
    const resultadoFinal = document.getElementById('resultado');

    if (decimal === '' || isNaN(decimal)) {
        resultadoFinal.innerText = 'Por favor, insira um número válido.';
        return;
    }

    const numero = parseInt(decimal, 10);
    const binario = numero.toString(2);

    resultadoFinal.innerText = `Binário: ${binario}`;
})