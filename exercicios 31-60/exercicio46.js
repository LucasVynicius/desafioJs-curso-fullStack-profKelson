// 46 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "e".

var palavras = ['estou', 'sou', 'esta', 'essa', 'ta', 'nunca'];

const palavrasComLetraE = (palavras) => {
   return palavras.filter(palavra => palavra.includes('e') || palavra.includes('E'));
}

const resultado = palavrasComLetraE(palavras);

console.log(resultado);