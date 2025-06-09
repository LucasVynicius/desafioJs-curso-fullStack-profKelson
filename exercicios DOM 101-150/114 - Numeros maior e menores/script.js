const calcular = document.getElementById('btnOrdenar');
const resultadoFinal = document.getElementById('resultado');

calcular.addEventListener('click', () =>{
    const entradaDeNumeros = document.getElementById('numeros').value;

    if(!entradaDeNumeros.trim()){
        resultadoFinal.innerText = 'Digite uma lista de números separados por vírgulas.';
        return;
    }

    const numeros = entradaDeNumeros.split(',').map(numero => Number(numero.trim())).filter(numero => !isNaN(numero));

    if(numeros.length === 0){
        resultadoFinal.innerText = 'Nenhum número válido foi digitado.';
        return;
    }

    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);

    resultadoFinal.innerText = `Maior número: ${maior} \nMenor número: ${menor}`;
});