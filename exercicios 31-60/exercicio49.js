// 49 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a última letra em maiúscula. Utilize a função toUpperCase() para converter a última letra.

var nomes = ['lucas', 'miguel', 'eduarda', 'noah'];

const converterPrimeireLetraDoNome = (nomes) => {
   return nomes.map(nome => {
      let tamanho = nome.length;
      let ultimaLetra = nome.charAt(tamanho -1).toUpperCase()
      return nome.slice(0, tamanho -1) + ultimaLetra;
   });
}

const resultado = converterPrimeireLetraDoNome(nomes);
console.log(resultado);