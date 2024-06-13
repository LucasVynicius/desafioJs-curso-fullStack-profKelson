// 22 - Crie um script que declare um array de números e utilize a função map() para criar um novo array onde cada número seja multiplicado por 2. Imprima o novo array.

var numeros = [11, 12, 13, 14, 15, 16, 17, 18];

let multiplicador = () => {
   return numeros.map((n1) => n1 * 2);
}

console.log(multiplicador());