// 25 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas. Utilize a função toUpperCase() para converter as strings.

const nomes = ['lucas', 'eduarda', 'miguel', 'noah'];

let converterLetras = () => {
   return nomes.map(nome => nome.toLocaleUpperCase());
}

console.log(converterLetras());