//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 8.

const listaDeNumeros = [16, 20, 24, 28, 32, 36, 40, 44];

const numerosDivisiveisPorOito = (numeros) => {
    return numeros.filter(numero => numero % 8 === 0);
};

const resultadoDoNumeros = numerosDivisiveisPorOito(listaDeNumeros);

console.log(resultadoDoNumeros);