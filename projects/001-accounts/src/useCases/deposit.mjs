import chalk from 'chalk'
import inquirer from 'inquirer'
import { addAmount } from './addAmount.mjs'
import { operation } from './operation.mjs'
import { checkAccount } from './utils/checkAccount.mjs'

export function deposit() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta?'
    }
  ])
    .then(answer => {
      const accountName = answer['accountName']

      if (!checkAccount(accountName)) {
        return deposit()
      }

      inquirer.prompt([
        {
          name: 'amount',
          message: 'Quanto deseja depositar?'
        }
      ])
        .then(answer => {
          const amount = answer['amount']

          if (amount <= 0) {
            console.error(chalk.red('Não é possível inserir valor 0 ou negativo na conta'))
            return deposit()
          } else {
            addAmount(accountName, amount)
            operation()
          }
        })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
}
