//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "u".

const listaDeNomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Emanuel'];

const nomesComALetraU = (nomes) => {
    return nomes.filter(nome => nome.includes('u'));
};

const resultadoNomes = nomesComALetraU(listaDeNomes);

console.log(resultadoNomes);