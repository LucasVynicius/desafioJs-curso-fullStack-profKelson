// 58 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "o".

var nomes = ['Lucas', 'Beraldo', 'Eduarda', 'Beck', 'Miguel', 'Brasil', 'Noah'];

const nomesComLetraO = () => {
   return nomes.filter (nome => nome.includes('O') || nome.includes('o'));
}

console.log(nomesComLetraO());