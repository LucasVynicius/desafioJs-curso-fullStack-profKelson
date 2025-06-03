//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e maiores que 15.

const numeros = [5, 10, 15, 20, 25, 30];

const arrayDeNumerosImparesEMaiores = (numeros) => {
    return numeros.filter(numero => numero % 2 !== 0 && numero > 15 );
};

const resultadoDosNumeros = arrayDeNumerosImparesEMaiores(numeros);

console.log(resultadoDosNumeros);