const fs = require('fs')

fs.rename('./arquivo.txt', 'newFile.txt', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Arquivo renomeado!')
})