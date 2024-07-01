// 42 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.

var frutas = ['lucas', 'miguel', 'eduarda', 'noah'];

const palavrasComCincoLetras = (frutas) => {
   return frutas.filter(fruta => fruta.length > 5);
}

const resultado = palavrasComCincoLetras(frutas);

console.log(resultado);