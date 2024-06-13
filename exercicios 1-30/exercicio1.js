// 1 - Crie um script que tenha três variáveis:
// nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores.

var nome = 'Lucas Vynicus';
const cpf = '123.456.789-10';

const sobreNome = () => {
    let sobreNome = 'Albuquerque';
    return sobreNome;
}

console.log(`Nome: ${nome} | Sobrenome: ${sobreNome()} | CPF: ${cpf}`);