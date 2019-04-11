require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000


const cors = require('cors')

console.log(process.env.MY_SECRET);

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!!'))
app.get('/Another', (req, res) => res.send('Hello World!'))
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
}, function (req, res) {
  res.send('Hello from B!')
})

app.listen(port, () => console.log(`Example app listening on port ${process.env.PORT}!`))