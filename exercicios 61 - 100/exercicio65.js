// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as consoantes removidas. 
// Utilize a função replace() para remover as consoantes.

const nomes = ['lucas', 'maria', 'miguel', 'noah', 'Teste1', "Teste2" ];

const arrayDeNomes = (nomes) => {

    return nomes.map(nome => {
        return nome.replace(/[^aeiouAEIOU]/g, '');
    });
};

const resultadoSemConsoantes = arrayDeNomes(nomes);

console.log(resultadoSemConsoantes);