import chalk from 'chalk'
import { createAccount } from './createAccount.mjs'
import { deposit } from './deposit.mjs'
import { getAccountBalance } from './getAccountBalance.mjs'
import { operation } from './operation.mjs'
import { withdraw } from './withdraw.mjs'

export function choiceMenu(action) {
  switch (action) {
    case 'Criar Conta':
      createAccount()
      break

    case 'Consultar Saldo':
      getAccountBalance()
      break

    case 'Depositar':
      deposit()
      break

    case 'Sacar':
      withdraw()
      break

    case 'Sair':
      console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
      process.exit()
      break

    default:
      operation()
      break
  }
}
