const x = 10

// Checar se X é inteiro
if (!Number.isInteger(x)) {
  throw new Error('O Valor de x não é um número inteiro!')
}

console.log('Continuando o código ...')
