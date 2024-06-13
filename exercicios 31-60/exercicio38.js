// 38 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".

const nomes = ["Lucas", "Miguel", "Noah", "Eduarda"];

const nomesQueTerminamComA = () => {
   return nomes.filter(nome => nome.endsWith('a'));
}

var nomeTerminaComA = nomesQueTerminamComA(nomes);

console.log(nomeTerminaComA);