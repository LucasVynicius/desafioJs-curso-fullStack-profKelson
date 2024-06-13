// 34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função reduce() para calcular a média das idades dos alunos.

const alunos = [
  { nome: "Lucas", idade: 28, notas: [9.0, 8.0, 7.5, 6.5] },
  { nome: "Miguel", idade: 5, notas: [9.0, 8.0, 7.5, 6.5] },
  { nome: "Noah", idade: 1, notas: [9.0, 8.0, 7.5, 6.5] },
];

var soma = 0;

// função reduce para calcular a soma das idades
const calcularMediaIdade = () => {
  return alunos.reduce((acumulador, aluno) => acumulador + aluno.idade, soma);
};

let mediaIdade = calcularMediaIdade(alunos);

console.log(mediaIdade);