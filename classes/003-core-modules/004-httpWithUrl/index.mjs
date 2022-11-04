import http from 'http'
import url from 'url'

const port = 3000

const server = http.createServer((request, response) => {



  const urlInfo = url.parse(request.url, true)
  const name = urlInfo.query.name

  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html')
  if (!name) {
    response.end(`
    <form method="GET">
      <h1>
        Preencha seu Nome:
      </h1>
      <label>
        Nome
        <input type="text" name="name" placeholder="Nome"/>
      </label>
        <input type="submit" value="Enviar" />
  
    </form>
    `)
  } else {
    response.end(`<h1>Seja bem vindo ${name}!`)
  }
})

server.listen(port, () => {
  console.log(`Server is running in port ${port}`)
})
