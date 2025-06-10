const buttonVerificar = document.getElementById('btnVerificar');
const resultadoFinal = document.getElementById('resultado');

buttonVerificar.addEventListener('click', () => {
    const valorDeEntrada = document.getElementById('numeros').value;

    if(isNaN(valorDeEntrada) || valorDeEntrada <= 0){
        resultadoFinal.innerText = 'Por favor, insira um número inteiro positivo';
        return;
    }

    const pares = [];
    const impares = [];

    for(let i = 1; i <= valorDeEntrada; i++){
        if(i % 2 ===0){
            pares.push(i);
        } else{
            impares.push(i);
        }
    }

    resultadoFinal.innerHTML = `
    <strong>Pares:</strong> ${pares.join(', ')}<br>
    <strong>Ímpares:</strong> ${impares.join(', ')}
  `;
});