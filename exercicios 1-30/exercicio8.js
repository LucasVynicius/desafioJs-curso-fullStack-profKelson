// 8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. O programa deve imprimir:
// A primeira nota do aluno é: …
// A segunda nota do aluno é: …
// A terceira nota do aluno é: …
// A média do aluno é: …
// O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7).

var notas = [8.5 , 9.0, 7.0];

const mediaNotas = () => {
    let mediaF = (notas[0] + notas[1] + notas[2]) / notas.length;

    return mediaF;
}

console.log(`1ª Nota: ${notas[0]} | 2ª Nota:${notas[1]} | 3ª Nota: ${notas[2]}`);
console.log(`A média final do aluno é: ${mediaNotas().toFixed(2)}`)

if (mediaNotas < 6){
    console.log(`REPROVADO POR ${mediaNotas().toFixed(2)}`);
} else {
    console.log(`APROVADO POR ${mediaNotas().toFixed(2)}`);
}