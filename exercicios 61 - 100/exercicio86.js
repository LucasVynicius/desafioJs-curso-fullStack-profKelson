//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "D".

const nomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Emanuel', 'Daniel', 'Danilo'];

const nomesQueComecamComALetraD = (nomes) => {
    return nomes.filter(nome => nome.startsWith('D'));
};

const resultadoDoNomes = nomesQueComecamComALetraD(nomes);

console.log(resultadoDoNomes);