const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((request, response) => {
  const urlInfo = require('url').parse(request.url, true)
  const name = urlInfo.query.name

  if (!name) {
    fs.appendFile('index.html', (error, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(data)
      return response.end()
    })
  } else {
    const nameNewLine = `${name} \r\n`

    fs.writeFile('file.txt', nameNewLine, (error, data) => {
      response.writeHead(302, {
        Location: '/'
      })
      return response.end()
    })
  }

})

server.listen(port, () => console.log('Rodando na porta 3000'))