const x = 10
const y = 'Any name'
const z = [1, 2]

// mais de um valor
console.log(x, y, z)

// Contagem de impressões
console.count(`O valor de x: ${x}, contagem`)
console.count(`O valor de x: ${x}, contagem`)
console.count(`O valor de x: ${x}, contagem`)
console.count(`O valor de x: ${x}, contagem`)

// variável entre string
console.log('O nome é %s, ele é programador.', y)

// limpa console
setTimeout(() => console.clear(), 2000)