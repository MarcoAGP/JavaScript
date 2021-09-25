const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // [10] = 10 imprime los valores,<6 empty items>, 10
console.log(valores) //Inclui espaço 4 con valor 10
console.log(valores.length) //Quantos elementos tem 5

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // Retira o ultimo valor do array 'teste'
delete valores[0] // deleta o primer valor
console.log(valores)

console.log(typeof valores) //Array e de tipo Object
