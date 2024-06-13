// 31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize um loop for para imprimir o nome de cada aluno.

const alunos = [
   aluno1 = {
      nome: 'Lucas',
      idade: 28,
      notas: [
         9.0, 8.0, 7.5, 6.5
      ]
   },

   aluno2 = {
      nome: 'Miguel',
      idade: 5,
      notas: [
         9.0, 8.0, 7.5, 6.5
      ]
   },

   aluno3 = {
      nome: 'Noah',
      idade: 1,
      notas: [
         9.0, 8.0, 7.5, 6.5
      ]
   }
];

const imprimirNomesAlunos = () => {
   return alunos.forEach(aluno => console.log(aluno.nome));
}

imprimirNomesAlunos(alunos);