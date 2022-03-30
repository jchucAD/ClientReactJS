var express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

console.log("Bonjour Node!");

app.use((req, res, next) => {
    const { method, path } = req
    console.log('hello avant next, méthode :' + method + ', path :' + path)
    next()
})

app.get('/', function (req, res) {
    res.send('Hello World of Node from Express :' + path.resolve(__dirname));
    //Renvoi un fichier HTML
    //res.sendFile('file.html')
})

app.get('/json', function (req, res) {
    const name = process.env.NAME || 'Rien'
    const titre = process.env.TITRE
    const age = process.env.AGE
    const login = process.env.LOGIN
    const url = process.env.URL
    const id = process.env.ID
    const job = process.env.JOB || 'Pas précisé'
    res.json({ name, titre, age, job, id, url, login });
})

var server = app.listen(3030, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://" + host + ":" + port)
})