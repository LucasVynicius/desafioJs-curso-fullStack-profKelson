// 16 - Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array. Imprima o resultado.

var numeros = [3, 5, 7, 9, 11, 13];
var soma = 0
for (let numero of numeros){
    soma += numero;
}

console.log(soma);

somat1 = 0

for(let i=0; i < numeros.length; i++){
    somat1 += numeros[i];
}

console.log(somat1);

let somat2 = numeros.reduce((numero, valorT) => numero + valorT, 0);

console.log(somat2);