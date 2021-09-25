const a = { name: 'Teste' }
console.log(a)

const b = a
b.name = 'Opa'
"Opa"
console.log(a) //Imprime name: 'Opa'

let c = 3
let d = c
d++
console.log(d) // imprime 4
console.log(c) // imprime 3

let valor // não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco) //false
console.log(produto) // preço: null
