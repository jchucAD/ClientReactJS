var express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

require('dotenv').config()

console.log("Bonjour Node!");

const app = express()
//app.engine('handlebars', exphbs())
//app.set('view engine','handlebars')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    const { method, path } = req
    console.log('hello avant next, méthode :' + method + ', path :' + path)
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World of Node from Express :' + path.resolve(__dirname));
    //Renvoi un fichier HTML
    //res.sendFile('file.html')
})

app.get('/json', (req, res) => {
    const name = process.env.NAME || 'Rien'
    const titre = process.env.TITRE
    const age = process.env.AGE
    const login = process.env.LOGIN
    const url = process.env.URL
    const id = process.env.ID
    const job = process.env.JOB || 'Pas précisé'
    res.json({ name, titre, age, job, id, url, login });
})

app.get('/user-name/:name', (req, res) => {
    const name = 'Nom saisi :' + req.params.name
    res.json({ name })
})

app.post('/users', (req, res) => {
    const { name, age } = req.query
    res.send('Nom :' + name + " et Age :" + age)
})

app.post('/user', (req, res) => {
    const { name, age } = req.body
    res.send({ name, age })
})

app.get('/heure', (req, res, next) => {
    const heure = new Date().toLocaleTimeString()
    req.heure = heure
    res.send(heure)
}, (req, res) => {
    res.send(req.heure)
})

var server = app.listen(3030, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://" + host + ":" + port)
})