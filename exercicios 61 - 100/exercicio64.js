//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 20.

const numeros = [1, 2 , 3 , 5, 8, 13, 21, 34, 55];

const numerosMaioresQueVinte = (numeros) => {
    return numeros.filter(num => num > 20);
};

const resultado = numerosMaioresQueVinte(numeros);

console.log(resultado);