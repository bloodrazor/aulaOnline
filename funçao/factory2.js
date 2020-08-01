function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.05
    }
}

console.log(criarProduto('Notebook', 2199.79))
console.log(criarProduto('mouse', 219.99))