import chalk from 'chalk'
import { writeFileSync } from 'fs'
import { deposit } from './deposit.mjs'
import { getAccount } from './utils/getAccount.mjs'

export function addAmount(accountName, amount) {
  const accountData = getAccount(accountName)

  if (!amount) {
    console.error(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
    return deposit()
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

  writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    error => console.error(error)
  )

  console.log(chalk.green(`Foi depositado o valor de R$ ${amount} na sua conta`))
}