// 39 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. Utilize a função toFixed() para formatar os números.

var numeros = [5, 10, 15, 20, 25];

const numerosConvertidos = () => {
   return numeros.map(numero => numero.toFixed(2));
}

var numerosFormatados = numerosConvertidos(numeros);

console.log(numerosFormatados);