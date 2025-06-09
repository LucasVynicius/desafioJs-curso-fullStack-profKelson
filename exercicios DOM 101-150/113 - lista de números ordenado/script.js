const buttonOrdenar = document.getElementById('ordenarNumeros');
const resultado = document.getElementById('resultado');

buttonOrdenar.addEventListener('click', () =>{
    const entradaNumeros = document.getElementById('numeros').value;

    if(!entradaNumeros.trim()){
        resultado.innerText = 'Digite números separados por vírgula';
        return;
    }

    const numeros = entradaNumeros
    .split(',')
    .map(numero => Number(numero.trim()))
    .filter(numero => !isNaN(numero));

    if(numeros.length === 0){
        resultado.innerText = 'Nenhum número válido foi inserido';
        return;
    }

    numeros.sort((a, b) => a - b);

    resultado.innerText = `Ordem Crescente: ${numeros.join(', ')}`
});