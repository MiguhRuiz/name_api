const Name = require('../models/name')
const Chance = require('chance')

const chance = new Chance()
module.exports = {
    getNames: (req, res) => {
        Name.find([])
            .catch(err => {
                res.status(500)
                res.send(err)
            })
            .then(docs => {
                res.status(200)
                res.send(docs)
            })
    },
    getName: (req, res) => {
        Name.findById(req.params.id)
            .catch(err => {
                res.status(500)
                res.send(err)
            })
            .then(doc => {
                res.status(200)
                res.send(doc)
            })
    },
    postName: (req, res) => {
        Name.create(req.body)
            .catch(err => {
                res.status(500)
                res.send(err)
            })
            .then(newDoc => {
                res.status(201)
                res.send(newDoc)
            })
    },
    postAutoRandom: (req, res) => {
        Name.create({name: chance.name()})
            .catch(err => {
                res.status(500)
                res.send(err)
            })
            .then(newDoc => {
                res.status(201)
                res.send(newDoc)
            })
    },
    updateName: (req, res) => {
        Name.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .catch(err => {
                res.status(500)
                res.send(err)
            })
            .then(newDoc => {
                res.status(201)
                res.send(newDoc)
            })
    },
    deleteName: (req, res) => {
        Name.findByIdAndRemove(req.params.id)
            .catch(err => {
                res.status(500)
                res.send(err)
            })
            .then(deleteDoc => {
                res.status(204)
                res.send(deleteDoc)
            })
    }
}