// 29 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A"

var nomes = ['Miguel', 'Noah', 'Eduarda', 'Lucas', 'Antonio', 'Ana'];

// O método startsWith() determina se uma string começa com os caracteres especificados, retornando true ou false.
const filtrar = () => {
   return nomes.filter(nomesComA => nomesComA.startsWith('A'));
}

console.log(filtrar());