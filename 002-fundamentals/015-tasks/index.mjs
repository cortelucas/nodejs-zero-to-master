import inquirer from "inquirer"
import chalk from 'chalk'

inquirer.prompt([
  {
    name: 'name',
    message: 'Insira seu nome => '
  },
  {
    name: 'age',
    message: 'Insira sua idade => '
  }
])
  .then(({ name, age }) => {
    console.log(chalk.bgYellow.black.bold(`Olá ${name}! Você tem ${age} anos!`))
  })
  .catch(error => console.log(`Erro: ${error}`))
