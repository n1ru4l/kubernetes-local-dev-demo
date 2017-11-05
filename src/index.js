/* eslint-disable no-console */
import express from 'express'
import morgan from 'morgan'

const PORT = 8080

const app = express()

app.use(morgan(`tiny`))

app.get(`*`, (request, response) => {
  response.json({
    data: `Hello World!`,
  })
})

app.listen(PORT, err => {
  if (!err) return console.log(`app is ready.`)
  console.log(err.message)
})
