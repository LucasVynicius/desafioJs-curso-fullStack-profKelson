// 24 - Crie um script que declare um array de strings e utilize a função join() para concatenar todas as strings em uma única string, separadas por vírgulas. Imprima o resultado.

const nomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah'];

let concatenar = () => {
   return nomes.join(',');
}

console.log(concatenar());