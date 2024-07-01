// 57 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas e invertida.

var nomes = ['LUCAS', 'MIGUEL', 'EDUARDA', 'NOAH'];

const converterPrimeireLetraDoNome = (nomes) => {
    return nomes.map(nome => nome.toLowerCase().split('').reverse().join(''));
}

const resultado = converterPrimeireLetraDoNome(nomes);
console.log(resultado);