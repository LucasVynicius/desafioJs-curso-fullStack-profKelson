// 5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals ${var}. Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".

var carreira = 'Dev back end';

function objetivoDaCarreira (carreira){
    return `Meu objetivo de carreira é me tornar um ${carreira}`;
}

const objetivoDaCarreira2 = (carreira) => {
    return `Meu objetivo de carreira é me tornar um ${carreira}`
}

console.log(objetivoDaCarreira(carreira));
console.log(objetivoDaCarreira2(carreira));
