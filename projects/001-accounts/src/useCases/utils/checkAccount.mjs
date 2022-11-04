import chalk from 'chalk'
import { existsSync } from 'fs'

export function checkAccount(accountName) {
  if (!existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Está conta não existe, escolha outro nome.'))
    return false
  }

  return true
}
