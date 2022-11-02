import http from 'http'
import url from 'url'
import fs from 'fs'

const port = 3000

const server = http.createServer((request, response) => {
  const urlInfo = url.parse(request.url, true)
  const name = urlInfo.query.name

  if (!name) {
    fs.readFile('index.html', (error, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(data)
      return response.end()
    })
  } else {
    fs.writeFile('file.txt', name, (error, data) => {
      response.writeHead(302, {
        Location: '/'
      })
      return response.end()
    })
  }

})

server.listen(port, () => console.log('Rodando na porta 3000'))