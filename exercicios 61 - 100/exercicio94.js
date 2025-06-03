//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "y".

const listnomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Vynicius', 'Lyvia'];

const nomesComALetraY = (nomes) => {
    return nomes.filter(nome => nome.includes('y'));
};

const resultadoNomes = nomesComALetraY(listnomes);

console.log(resultadoNomes);
