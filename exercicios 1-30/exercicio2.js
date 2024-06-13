// 2 - Crie um script que simule um sistema de registro de produtos. O script deve ter três variáveis
// As variáveis produto e codigoProduto devem estar em um escopo global. A variável categoria deve estar dentro de uma função. A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha): Produto Categoria Código do Produto.

var produto = "Dell Vostro";
const codigoProduto = "Deel123";

const categoriaDoProduto = () => {
  let categoria = "Notebook";
  return categoria;
}

console.log(`Produto: ${produto} | Categoria: ${categoriaDoProduto()} | Codigo do Produto:${codigoProduto}`)
