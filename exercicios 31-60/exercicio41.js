// 41 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula. Utilize a função toUpperCase() para converter a primeira letra.

var nomes = ['lucas', 'miguel', 'eduarda', 'noah'];

const converterPrimeireLetraDoNome = (nomes) => {
    return nomes.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1));
}

const resultado = converterPrimeireLetraDoNome(nomes);
console.log(resultado);