const express = require('express')
const app = express()
const data = require('./data/dados.json')
const bodyParser = require('body-parser')


data.push({
    "id": 6,
    "nome":"Teste",
    "patas": 5,
    "classe": "teste"
})
// Getting Request
app.get('/', (req, res) => {
    res.json(data)
})

app.get('/animal/:id', (req, res) => {
    let animal = data.filter(animal => animal.id == req.params.id)
    res.json(animal)
})

// POST - Using Body Request
app.use(express.json())

app.post('/animal/new',(req, res) => {

    console.log(req.body.nome)
    data.push({
        "id": req.body.id,
        "nome": req.body.nome,
        "patas": req.body.patas,
        "classe": req.body.classe
    })
    res.json(req.body)
})

app.listen(3000, () => {
    console.log('Rodando!!')
})
