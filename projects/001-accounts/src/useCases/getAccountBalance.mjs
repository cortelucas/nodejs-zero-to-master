import chalk from 'chalk'
import inquirer from 'inquirer'
import { operation } from './operation.mjs'
import { checkAccount } from './utils/checkAccount.mjs'
import { getAccount } from './utils/getAccount.mjs'

export function getAccountBalance() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta? '
    }
  ])
    .then(answer => {
      const accountName = answer['accountName']

      if (!checkAccount(accountName)) {
        return getAccountBalance()
      }
      const accountData = getAccount(accountName)

      console.log(`Olá, o saldo da sua conta é de ${accountData.balance >= 0 ? chalk.bgBlue.black(`R$ ${accountData.balance}`) : chalk.bgRed.black(`R$ ${accountData.balance}`)}`)

      operation()
    })
    .catch(error => console.log(error))
}
