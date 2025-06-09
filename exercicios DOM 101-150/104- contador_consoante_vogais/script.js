let btnContar = document.getElementById('btnContar');
btnContar.addEventListener('click', () => {
    const texto = document.getElementById('texto').value.toLocaleLowerCase();
    const vogais = 'aeiouAEIOU';
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    let numerosVogais = 0;
    let numerosConsoantes = 0;

    for(let char of texto) {
        if(vogais.includes(char)){
            numerosVogais++;
        } else if(alfabeto.includes(char)){
            numerosConsoantes++;
        }
    }

    const resultado = document.getElementById('resultado').innerHTML = `Vogais: ${numerosVogais}  <br> Consoantes: ${numerosConsoantes}`;
});