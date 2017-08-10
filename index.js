const express = require('express')
const bodyParser = require('body-parser')
const nameAPI = require('./api/name')
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT || '3000'

mongoose.connect('mongodb://localhost:27017/names_api')

app.use(bodyParser())

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Name API Routes
app.get('/api/names', nameAPI.getNames)
app.get('/api/names/:id', nameAPI.getName)
app.post('/api/names', nameAPI.postName)
app.put('/api/names/:id', nameAPI.updateName)
app.delete('/api/names/:id', nameAPI.deleteName)

app.listen(port, () => {
    console.log(`The app is listening on ${port}`)
})