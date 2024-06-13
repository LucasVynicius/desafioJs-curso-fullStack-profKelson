// 3 - Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:
// As variáveis nomeAluno e matricula devem estar em um escopo global. A variável curso deve estar dentro de uma função. A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando template literals ${var}.

var nomeAluno = 'Miguel';
const matricula = '230219';

const cursoMatriculado = () => {
    let curso = 'Robotica';
    return curso;
}

console.log(`Aluno: ${nomeAluno} de matricula: ${matricula} está matriculado no curso: ${cursoMatriculado()}`);