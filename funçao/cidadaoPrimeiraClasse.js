//função de forma literal
function func1() {}

//armazenar em variavel(let, const, var)
const func2 = function () {}

//armazenar em array
const array = [function (a, b) {return a + b}, func1, func2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const obj= {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//como passar função com parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

//uma função pode retornar/conter uma função
function soma(a, b){
    return function(c) {
        console.log(a + b+ c)
    }
}

soma(2, 3)(7)