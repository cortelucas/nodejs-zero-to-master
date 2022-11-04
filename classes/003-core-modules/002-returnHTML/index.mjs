import http from 'http'

const port = 3000

const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html')
  response.end('<h1>Olá, este é o meu primeiro server com HTML</h1><p>Testando atualização</p>')
})

server.listen(port, () => {
  console.log(`Server is running in port ${port}`)
})
