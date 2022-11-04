import chalk from 'chalk'
import inquirer from 'inquirer'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

import { operation } from './operation.mjs'

export function createAccount() {
  console.info(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
  console.info(chalk.green('Defina as opções da sua conta a seguir: '))

  buildAccount()
}

function buildAccount() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Digite um nome para sua conta: '
    }
  ])
    .then(answer => {
      const accountName = answer['accountName']
      console.info(accountName)

      if (!existsSync('accounts')) {
        mkdirSync('accounts')
      }

      if (existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
        buildAccount()
        return
      }

      writeFileSync(`accounts/${accountName}.json`, '{ "balance": 0 }', (error) => console.error(error))

      console.log(chalk.green('Parabéns! a sua conta foi criada!'))
      operation()
    })
    .catch(error => console.error(error))
}
