//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 6 caracteres.

const nomes = ['lucas', 'maria', 'miguel', 'noah', 'Teste1', "Teste2" ];

const arrayDeNome = (array) => {
    return array.filter(nome => nome.length === 6);
};

const resultadoDeNomesComSeisCaracteres = arrayDeNome(nomes);

console.log(resultadoDeNomesComSeisCaracteres)