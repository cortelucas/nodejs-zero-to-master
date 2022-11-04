import minimist from "minimist";
import { sum } from "./sum.mjs";

const args = minimist(process.argv.slice(2))

const x = parseInt(args['x'])
const y = parseInt(args['y'])

console.log(sum(x, y))