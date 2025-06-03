//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "i"

const listaDeNomes = ['lucas', 'maria', 'miguel', 'noah', 'Teste1', "Teste2", 'Cassio' ];

const nomesComALetraI = (nomes) =>{
    return nomes.filter(nome => nome.includes('i'));
};

const resultadoDosNomes = nomesComALetraI(listaDeNomes);

console.log(resultadoDosNomes);