//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 4.

const listaDeNumeros = [16, 20, 24, 28, 32, 36, 40, 44];

const numerosMultiplicadoPorQuatro = (numeros) => {
    return numeros.map(numero => numero * 4);
};

const resultado = numerosMultiplicadoPorQuatro(listaDeNumeros);

console.log(resultado);