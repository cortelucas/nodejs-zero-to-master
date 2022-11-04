import chalk from 'chalk'
import { writeFileSync } from 'fs'
import { operation } from './operation.mjs'
import { getAccount } from './utils/getAccount.mjs'
import { withdraw } from './withdraw.mjs'

export function withdrawAmount(accountName, amount) {
  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))
    return withdraw()
  }

  if (accountData.balance <= 0) {
    console.log(chalk.bgRed.black('Valor indisponível!'))
    return withdraw()
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

  writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    error => console.error(error)
  )

  console.log(chalk.green(`Foi realizado um saque no valor de R$ ${amount} da sua conta`))
  console.log(`Saldo: ${accountData.balance}`)
}