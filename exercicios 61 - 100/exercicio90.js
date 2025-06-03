//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 9 caracteres.

const listaDeNomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Jefferson', 'Arlington', 'Isabella'];

const nomesComNoveLetras = (nomes) => {
    return nomes.filter(nome => nome.length === 9);
};

const resultaDosNomes = nomesComNoveLetras(listaDeNomes);

console.log(resultaDosNomes);