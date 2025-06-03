//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "z"

const listaDeNomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Azarias', 'Ezequiel'];

const nomeQueContemALetraZ = (nomes) => {
    return nomes.filter(nome => nome.includes('z'));
};

const resultado = nomeQueContemALetraZ(listaDeNomes);

console.log(resultado);