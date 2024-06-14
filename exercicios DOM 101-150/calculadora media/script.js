const calcularMedia = () => {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);

    const result = (nota1 + nota2 + nota3 + nota4) / 4;
    if(result >= 7){
        document.getElementById('result').innerText = `ALUNO APROVADO POR MÉDIA: ${result} `
    } else {
        document.getElementById("result").innerText = `ALUNO REPROVADO! `;
    }
}