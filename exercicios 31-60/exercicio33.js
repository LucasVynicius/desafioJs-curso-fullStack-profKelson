// 33 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função filter() para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. Imprima o novo array.

const alunos = [
  { nome: "Lucas", idade: 28, notas: [9.0, 8.0, 7.5, 6.5] },
  { nome: "Miguel", idade: 5, notas: [9.0, 8.0, 7.5, 6.5] },
  { nome: "Noah", idade: 1, notas: [9.0, 8.0, 7.5, 6.5] },
];

const imprimirIdadesAlunos = () => {
  return alunos.filter(aluno => aluno.idade >= 28);
};

let idadesAlunos = imprimirIdadesAlunos(alunos);

console.log(idadesAlunos);
