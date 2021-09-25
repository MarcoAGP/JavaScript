let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // verdadero
console.log(!isAtivo) // falso

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || ' ')) //Verdadero

let nome = ''
console.log(nome || 'Desconhecido') //Caso nome no esteja valido Imprime Desconhecido

let nome = 'Lucas'
console.log(nome || 'Desconhecido') //Imprime Lucas
