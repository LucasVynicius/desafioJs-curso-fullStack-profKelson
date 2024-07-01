// 45 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.

var nomes = ['lucas', 'Eduarda', 'Miguel', 'Noah'];

const letrasInvertidas = (nomes) => {
   return nomes.map(nome => nome.toUpperCase().split('').reverse().join(''));
}

const resultado = letrasInvertidas(nomes);

console.log(resultado);