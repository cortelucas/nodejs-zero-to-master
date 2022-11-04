import chalk from 'chalk'

const note = 4

note >= 7
  ? console.log(chalk.green.bold('Parabéns! Você está aprovado!'))
  : note < 7 && note >= 5
    ? console.log(chalk.yellow.bold('Cuidado! Você está de recuperação!'))
    : console.log(chalk.red.bold('Foda! Você está reprovado!'))
