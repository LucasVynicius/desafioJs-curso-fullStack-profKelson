// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em minúscula. 
// Utilize a função toLowerCase() para converter as letras


const nomes = ['LUCAS', 'MARIA', 'MIGUEL', 'NOAH'];

const arrayTransforme = (nomes) => {
   return nomes.map(nome => {
      if(nome.length === 1){
         return nome.toLowerCase();
      }

      const primeiraLetra = nome[0].toLowerCase();
      const nomeDoMeio = nome.slice(1, -1);
      const ultimaLetra = nome[nome.length - 1].toLowerCase();


      return primeiraLetra + nomeDoMeio + ultimaLetra
   });
};

const nomesTransformados = arrayTransforme(nomes);

console.log(nomesTransformados);