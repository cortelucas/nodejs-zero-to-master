import { readFile } from 'fs'
import http from 'http'

const port = 3000

const server = http.createServer((request, response) => {
  readFile('message.html', function (err, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(data, 'utf8')
    return response.end()
  })
})

server.listen(port, () => {
  console.log(`Server is running in port ${port}`)
})