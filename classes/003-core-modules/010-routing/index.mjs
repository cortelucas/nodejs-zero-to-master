import { existsSync, readFile } from 'fs'
import { createServer } from 'http'
import { parse } from 'url'

const port = 3000

const server = createServer((request, response) => {
  const query = parse(request.url, true)
  const fileName = query.pathname.substring(1)

  if (fileName.includes('html')) {
    if (existsSync(fileName)) {
      readFile(fileName, function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)
        return response.end()
      })
    } else {
      readFile('404.html', function (err, data) {
        response.writeHead(404, { 'Content-Type': 'text/html' })
        response.write(data)
        return response.end()
      })
    }
  }

})

server.listen(port, () => console.info(`Server is running in http://localhost:${port}`))