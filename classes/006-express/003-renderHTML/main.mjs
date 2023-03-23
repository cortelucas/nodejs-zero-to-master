import express from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000

const basePath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'templates')

app.get('/', (request, response) => {
  response.sendFile(`${basePath}/index.html`)
})

app.listen(3000, () => {
  console.log(`App running 🚀: http://localhost:${port}`)
})