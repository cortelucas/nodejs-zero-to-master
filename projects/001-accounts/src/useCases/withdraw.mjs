import inquirer from 'inquirer'
import { operation } from './operation.mjs'
import { withdrawAmount } from './withdrawAmount.mjs'
import { checkAccount } from './utils/checkAccount.mjs'

export function withdraw() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
    .then(answer => {
      const accountName = answer['accountName']

      if (!checkAccount(accountName)) {
        return withdraw()
      }

      inquirer.prompt([
        {
          name: 'amount',
          message: 'Quanto deseja sacar?'
        }
      ])
        .then(answer => {
          const amount = answer['amount']

          if (amount <= 0) {
            console.error(chalk.red('Não é possível sacar valor 0 ou negativo na conta'))
            return withdraw()
          } else {
            withdrawAmount(accountName, amount)
            operation()
          }
        })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
}