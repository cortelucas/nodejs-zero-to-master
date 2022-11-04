import inquirer from 'inquirer'
import { choiceMenu } from './choiceMenu.mjs'

export function operation() {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: [
      'Criar Conta',
      'Consultar Saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }])
    .then(answer => {
      const action = answer['action']
      choiceMenu(action)
    })
    .catch(error => console.error(error))
}
