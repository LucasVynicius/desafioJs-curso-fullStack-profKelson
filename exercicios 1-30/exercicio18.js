// 18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. Utilize a função Math.max() para encontrar o maior número.

var numeros = [10, 20, 30,40, 50, 80];

const numeroM = (numero) => {
    return Math.max(...numero);
}

var numeroMaior = numeroM(numeros)
console.log(numeroMaior);