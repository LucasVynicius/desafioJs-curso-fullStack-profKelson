//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais triplicadas. 
// Utilize a função replace() para triplicar as vogais.

const nomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Emanuel'];

const vogasTriplicadas = (nomes) => {
    return nomes.map(nome => {
        return nome.replace(/[aeiouAEIOU]/g, vogais => vogais.repeat(3));
    })
};

const resultado = vogasTriplicadas(nomes);

console.log(resultado);