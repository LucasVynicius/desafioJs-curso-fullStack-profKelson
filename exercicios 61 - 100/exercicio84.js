// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 25.

const listaDeNumeros = [16, 20, 24, 28, 32, 36, 40, 44];

const numerosMaioresQueVinteECinco = (numeros) => {
    return numeros.filter(numero => numero > 25);
};

const resultado = numerosMaioresQueVinteECinco(listaDeNumeros);

console.log(resultado);