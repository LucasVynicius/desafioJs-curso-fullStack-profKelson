//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 7 caracteres.

const nomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Emanuel'];

const nomesComSeteCaracters = (nomes) => {
    return nomes.filter(nome => nome.length === 7);
};

const resultadoDoNomes = nomesComSeteCaracters(nomes);

console.log(resultadoDoNomes);