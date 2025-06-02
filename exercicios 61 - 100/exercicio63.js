//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 2.

const numerosInteiros = [1, 2 , 3 , 5, 8, 13, 21];

const arrayDeNumeros = (numeros) => {

    return numeros.map(num => num - 2);

};

const numerosDecrementados = arrayDeNumeros(numerosInteiros);

console.log(numerosDecrementados)