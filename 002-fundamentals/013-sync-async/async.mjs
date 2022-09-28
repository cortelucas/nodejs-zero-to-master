import fs from 'fs'

console.log('Início!')

fs.writeFile('file_async.txt', 'oi', error => {
  setTimeout(() => {
    console.log('Arquivo Criado!')
  }, 1000)
})

console.log('Fim!')
