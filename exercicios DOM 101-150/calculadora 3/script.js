const somaDeValorN = () => {
    let n = parseFloat(document.getElementById('num').value);
    let soma = 0;

    for (let i = 0; i <= n; i++) {
        soma += i;   
    }

    const result = n + soma;

    document.getElementById('result').innerHTML = `O resultado da soma de n é ${result}`;
};