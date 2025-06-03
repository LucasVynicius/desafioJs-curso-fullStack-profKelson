//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 35.

const listaDeNumeros = [5, 6, 7, 8, 9, 34, 56];

const numerosMenoresQueTrinta = (numeros) => {
    return numeros.filter(numero => numero < 35);
};

const resultadosDeNumeros = numerosMenoresQueTrinta(listaDeNumeros);

console.log(resultadosDeNumeros);