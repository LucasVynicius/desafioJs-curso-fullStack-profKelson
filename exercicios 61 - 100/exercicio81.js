//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha 
// a primeira letra em maiúscula e a última letra em minúscula. 
// Utilize a função toUpperCase() e toLowerCase() para converter as letras.

const listaDeNomes = ['lucaS', 'eduardA', 'migueL', 'noaH', 'emanueL'];

const conversaoDeLetras = (nomes) => {
    return nomes.map(nome =>{
        if(nome.length === 1){

            return nome[0].toUpperCase().toLowerCase();
        }

        const primeiraLetra = nome[0].toUpperCase();
        const letrasDoMeio = nome.slice(1, -1);
        const ultimaLetra = nome[nome.length - 1].toLowerCase();

        return primeiraLetra + letrasDoMeio + ultimaLetra
    });
};

const resultaDosNomes = conversaoDeLetras(listaDeNomes);

console.log(resultaDosNomes);
