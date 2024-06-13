// 7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:
// nome: O nome do aluno.
// cpf: O CPF do aluno.
// cidade: A cidade onde o aluno mora.
// notas: Um array com 4 notas do aluno. Imprima o nome, CPF e cidade do aluno. Imprima cada uma das notas do array notas. Calcule a média das notas do aluno e imprima. Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. Utilize template literals para a concatenação de strings.



let pessoa = {
  nome: "Miguel",
  cpf: "124.567.677-27",
  cidade: "João Pessoa",
  notas: [
    8.5, 9.0, 6.7, 7.2
]
};
const mediaNota = () => {
    return mediaNotaF = (pessoa.notas[0] + pessoa.notas[1] + pessoa.notas[2] + pessoa.notas[3]) / pessoa.notas.length
}
console.log(`Nome: ${pessoa.nome}| cpf: ${pessoa.cpf}| cidade: ${pessoa.cidade}`);
console.log(
  `1ª Nota: ${pessoa.notas[0]}| 2ª Nota: ${pessoa.notas[1]} | 3ª Nota: ${pessoa.notas[2]}| 4ª Nota: ${pessoa.notas[3]}}`
);
console.log(`Media Final: ${mediaNota().toFixed(2)}`);

const notaAleatoria = pessoa.notas[Math.floor(Math.random() * pessoa.notas.length)];
let notaConvertida = notaAleatoria * 10;

console.log(`A nota sorteada foi: ${notaAleatoria} e convertida de 0-100 é: ${notaConvertida}`)





