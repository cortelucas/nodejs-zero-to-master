const fs = require('fs')

fs.readFile('text.txt', 'utf8', (error, data) => {
  if (error) {
    console.log(error)
  }
  console.log(data)
})
