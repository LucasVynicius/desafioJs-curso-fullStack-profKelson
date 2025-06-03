// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais duplicadas. 
// Utilize a função replace() para duplicar as vogais.

const nomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Emanuel'];

const vogasDuplicadas = (nomes) => {
    return nomes.map(nome => {
        return nome.replace(/[aeiouAEIOU]/g, vogais => vogais + vogais);
    })
};

const resultado = vogasDuplicadas(nomes);

console.log(resultado);