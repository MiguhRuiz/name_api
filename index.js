const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || '3000'

app.use(bodyParser())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`The app is listening on ${port}`)
})