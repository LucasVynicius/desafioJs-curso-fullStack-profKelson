// 32 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). 
// Utilize a função map() para criar um novo array contendo apenas os nomes dos alunos. Imprima o novo array.

const alunos = [
   {nome: "Lucas", idade: 28, notas: [9.0, 8.0, 7.5, 6.5],},
   {nome: "Miguel", idade: 5, notas: [9.0, 8.0, 7.5, 6.5],},
   {nome: "Noah", idade: 1, notas: [9.0, 8.0, 7.5, 6.5],}
];

const imprimirNomesAlunos = () => {
  return alunos.map((aluno) => console.log(aluno.nome));
};

imprimirNomesAlunos(alunos);
