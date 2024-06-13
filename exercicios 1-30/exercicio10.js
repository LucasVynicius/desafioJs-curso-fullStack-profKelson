// 10 - Refaça o exercício anterior utilizando .map(). Para criar um array com números de 1 a 100:
// const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

const numeros = Array.from({length:100}, (_,index) => index + 1);

numeros.map(numero => {
    if (numero % 3 == 0 && numero % 5 == 0) {
      console.log ('FiZZBuZZ');
    } else if (numero % 3 == 0) {
      console.log ('FiZZ');
    } else if (numero % 5 == 0) {
      console.log('BuZZ');
    }
    else{
        console.log(numero);
    }
});