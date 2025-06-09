const button = document.getElementById('buttonCalcular');

button.addEventListener('click', () => {
    const input = document.getElementById('numero').value;
    const resultadoFinal = document.getElementById('resultado');
    resultadoFinal.innerHTML = '';

    const n = parseInt(input, 10);

    if(isNaN(n) || n < 0){
        resultadoFinal.innerText = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    let sequencia = [];
    let a = 0, b = 1;

    while(a <= n) {
        sequencia.push(a);
        [a,b] = [b, a + b];
    }

    resultadoFinal.innerText = `Sequência de Fibonacci até ${n}: ${sequencia.join(', ')}`;
});