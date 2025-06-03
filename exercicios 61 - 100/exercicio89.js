//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha 
// a primeira letra em minúscula e a última letra em maiúscula. Utilize a função toLowerCase() e toUpperCase() para converter as letras.

const listaDeNomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah', 'Emanuel'];

const conversaoDeLetras = (nomes) => {
    return nomes.map(nome =>{
        if(nome.length === 1){

            return nome[0].toUpperCase().toLowerCase();
        }

        const primeiraLetra = nome[0].toLowerCase();
        const letrasDoMeio = nome.slice(1, -1);
        const ultimaLetra = nome[nome.length - 1].toUpperCase();

        return primeiraLetra + letrasDoMeio + ultimaLetra
    });
};

const resultaDosNomes = conversaoDeLetras(listaDeNomes);

console.log(resultaDosNomes);