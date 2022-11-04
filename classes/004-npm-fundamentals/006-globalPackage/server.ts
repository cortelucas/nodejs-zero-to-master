import { createServer, IncomingMessage, ServerResponse } from 'http'

const port = 3000

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  switch (request.url) {
    case '/': {
      if (request.method === 'GET') {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({
          "message": "Hello World"
        }))
      }
      break;
    }
    default: {
      response.statusCode = 404;
      response.end("Error 404 - Página não encontrada");
    }
  }
})

server.listen(port, () => {
  console.log(`Server is running in port ${port}`)
})