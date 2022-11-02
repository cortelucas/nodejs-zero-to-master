import { existsSync, mkdirSync } from "fs";

if (!existsSync('./myFolder')) {
  console.log('Não existe')
  mkdirSync('myFolder')
} else if (!existsSync('./myFolder')) {
  console.log('existe')
} 