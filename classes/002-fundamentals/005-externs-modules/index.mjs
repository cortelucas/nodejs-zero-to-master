import minimist from "minimist"

const args = minimist(process.argv.slice(2))

console.log(args)

const name = args['name']
const employee = args['employee']

console.log(`Nome => ${name} \nProfissão => ${employee}`)