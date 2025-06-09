//Precisa de correção

const encontraNomes = (nomes) => {

    if (nomes.length === 0) {
       return { longo: "", curto: "" };
    }

    let longo = nomes[0];
    let curto = nomes[0];

    for (let nome of nomes){
        if(nome.length > longo.length){
            return longo = nome;
        }

        if(nome.length < curto.length){
            return curto = nome;
        }
    }

    return {longo, curto};
};

const exibirNomes = () => {
    let names = document.getElementById('nomes').value;
    const result = document.getElementById('result');

    // if (names.trim()){
    //     return result.textContent = 'Por favor, insira uma lista de nome.';
    // }

    const nomes = names.split(',').map(nome => nome.trim()).filter(nome => nome);

    // if (names.length === 0) {
    //     return (result.textContent ="Por favor, insira uma lista válida de nomes.");
    // }

    const {longo, curto} = encontraNomes(nomes);

    result.innerHTML = `
    <p>Nome mais Longo: ${longo}</p>
    <p>Nome mais Curto: ${curto}</p>
    `;

}