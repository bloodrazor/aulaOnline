const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i in notas) {
    console.log(i, notas[i])
}
console.log()
const  pessoa = {
    nome:'Ana', 
    sobrenome: 'Silva',
    idade: 28,
    peso: 78
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}