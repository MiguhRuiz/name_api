const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({
    name: String
})

module.exports = new mongoose.Model('Name', nameSchema)