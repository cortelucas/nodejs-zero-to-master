import { URL } from "url";
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parseURL = new URL(address)

console.log(parseURL.host)
console.log(parseURL.pathname)
console.log(parseURL.search)
console.log(parseURL.searchParams)
console.log(parseURL.searchParams.get('produtos'))
