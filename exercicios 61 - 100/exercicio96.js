//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 9.

const listaDeNumeros = [5, 6, 7, 8, 9, 34, 56];

const numeroMultiplosDeNove = (numeros) => {
    return numeros.filter(numero => numero % 9 === 0);
};

const resultado = numeroMultiplosDeNove(listaDeNumeros);

console.log(resultado);