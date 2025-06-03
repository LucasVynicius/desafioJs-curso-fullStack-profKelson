// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 30.

const listaDeNumeros = [16, 20, 24, 28, 32, 36, 40, 44];

const numerosMenoresDeTrinta = (numeros) => {
    return numeros.filter(numero => numero < 30);
};

const resultadoDosNumeros = numerosMenoresDeTrinta(listaDeNumeros);

console.log(resultadoDosNumeros);