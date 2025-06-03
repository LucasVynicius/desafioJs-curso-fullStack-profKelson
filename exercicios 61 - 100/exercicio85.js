//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array
// onde cada string tenha as consoantes duplicadas. Utilize a função replace() para duplicar as consoantes.

const nomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Emanuel'];

const consoanteDuplicadas = (nomes) => {
    return nomes.map(nome => {
        return nome.replace(/[bcdfghjklmnpqrstvxwzBCDFGHJKLMNPQRSTVXWZ]/g, consoante => consoante + consoante);
    })
};

const resultado = consoanteDuplicadas(nomes);

console.log(resultado);