import chalk from 'chalk'
import _ from 'lodash'

const arrayNumbers = [1, 2, 3, 4, 5]
const arrayNumbersPair = [2, 4, 6, 8, 10]
const arrayNumbersOdd = [1, 3, 5, 7, 9]

const diff = _.difference(arrayNumbers, arrayNumbersPair)

console.log(chalk.red.bold(diff))