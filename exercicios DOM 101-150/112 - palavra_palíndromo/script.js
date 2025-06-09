const buttonVerificacao = document.getElementById('btnVerificar');
const resultado = document.getElementById('resultado');

buttonVerificacao.addEventListener('click', () => {
    const palavra = document.getElementById('palavra').value.trim().toLowerCase();
    
    if (!palavra){
        resultado.innerText = 'Por favor, insira uma palavra.';
        return;
    }

    const palindromo =  palavra === palavra.split('').reverse().join('');

    if(palindromo){
        resultado.innerText = `A palavra "${palavra}" é um palíndromo`;
    } else{
        resultado.innerText = `A palavra "${palavra}" não é um palíndromo`;
    }
});