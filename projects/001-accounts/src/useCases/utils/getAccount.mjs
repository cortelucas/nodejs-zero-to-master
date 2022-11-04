import { readFileSync } from 'fs'

export function getAccount(accountName) {
  const accountJSON = readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf8',
    flag: 'r'
  })

  return JSON.parse(accountJSON)
}
