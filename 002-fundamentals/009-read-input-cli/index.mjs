import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({
  input,
  output
})

const answer = rl.question("Qual a sua linguagem preferida?", answer => {
  console.log(`A minha linguagem preferida é: ${answer}`)
  rl.close()
})
