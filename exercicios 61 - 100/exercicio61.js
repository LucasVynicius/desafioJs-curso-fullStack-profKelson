// Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em maiúscula. 
// Utilize a função toUpperCase() para converter as letras

const nomes = ['lucas', 'maria', 'miguel', 'noah'];

const arrayTransforme = (nomes) => {
   return nomes.map(nome => {
      if(nome.length === 1){
         return nome.toUpperCase();
      }

      const primeiraLetra = nome[0].toUpperCase();
      const nomeDoMeio = nome.slice(1, -1);
      const ultimaLetra = nome[nome.length - 1].toUpperCase();


      return primeiraLetra + nomeDoMeio + ultimaLetra
   });
};

const nomesTransformados = arrayTransforme(nomes);

console.log(nomesTransformados);