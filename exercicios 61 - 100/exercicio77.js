//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida.

const listaDeNomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Emanuel'];

const nomesInvertidosEMaisculo = (nomes) => {
    return nomes.map(nome => nome.toUpperCase().split('').reverse().join(''));
};

const resultadoNomesTransformados = nomesInvertidosEMaisculo(listaDeNomes);

console.log(resultadoNomesTransformados);