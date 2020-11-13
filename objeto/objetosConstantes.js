//pessoa -> 123 -> {...}
const pessoa = {nome:'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua Ribeiro'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'João'})
pessoaConstante.nome = 'Mario'
console.log(pessoaConstante)