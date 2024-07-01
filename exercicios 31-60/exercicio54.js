//54 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "B".

var nomes = ['Lucas', 'Beraldo', 'Eduarda', 'Beck', 'Miguel', 'Brasil', 'Noah'];

const nomesComLetraB = () => {
   return nomes.filter (nome => nome.includes('B') || nome.includes('b'));
}

console.log(nomesComLetraB());