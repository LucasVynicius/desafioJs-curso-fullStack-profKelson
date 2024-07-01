// 53 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais removidas. Utilize a função replace() para remover as vogais.

var nomes = ['Lucas', 'Duda', 'Miguel', 'Noah'];

const removendoVogaisDosNomes = () => {
   //expressão regular => /[aeiouA...]/g, ''
   return nomes.map( nome => nome.replace(/[aeiouAEIOU]/g, ''));
}

const resultado = removendoVogaisDosNomes();

console.log(resultado);