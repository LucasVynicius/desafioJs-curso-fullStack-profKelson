//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 8 caracteres

const listaDeNomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Emanuel', 'Benjamin', 'Hermione'];

const nomesComOitoLetras = (nomes) => {
    return nomes.filter(nome => nome.length == 8);
};

const resultadoNomes = nomesComOitoLetras(listaDeNomes);

console.log(resultadoNomes);



