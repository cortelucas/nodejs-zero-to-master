import { stat } from 'fs'

stat('file.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.info(stats.isFile())
  console.info(stats.isDirectory())
  console.info(stats.isSymbolicLink())
  console.info(stats.ctime())
  console.info(stats.size())
})