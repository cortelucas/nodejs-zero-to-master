import { basename, dirname, extname } from "path"

const customPath = '/home/cortelucas/.gitignore'

console.info(dirname(customPath))
console.info(basename(customPath))
console.info(extname(customPath))
