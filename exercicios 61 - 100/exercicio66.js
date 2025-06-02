//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "C".

const nomes = ['lucas', 'maria', 'miguel', 'noah', 'Teste1', "Teste2", 'Cassio' ];

const arrayComNomes = (nomes) => {
    return nomes.filter(nome => nome.startsWith('C'));
};

const resultado = arrayComNomes(nomes);

console.log(resultado);