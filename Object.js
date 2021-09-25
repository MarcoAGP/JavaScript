const prod1 = {} //Objeto bacio
prod1.nome = 'Celular Ultra Mega' //nome: 'Celular...
prod1.preco = 4998.90 //preco: 49...
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}
console.log(prod2)
