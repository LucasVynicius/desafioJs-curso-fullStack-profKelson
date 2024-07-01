//50 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres.

var nomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Chase', 'Duda', 'Guel'];

const nomesComQuatrosCaracteres = (nomes) => {
   return nomes.filter(nome => nome.length === 4);
}

const resultado = nomesComQuatrosCaracteres(nomes);

console.log(resultado);