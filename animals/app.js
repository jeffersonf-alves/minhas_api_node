const express = require('express')
const app = express()
const data = require('./data/dados.json')
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.json(data)
})

app.get('/animal/:id', (req, res) => {
    let animal = data.filter(animal => animal.id == req.params.id)
    if(animal.length >= 1) {
        res.json(animal)
    } else {
        res.json({ error: "Animal não existe!"})
    }

})
// POST - Using Body Request
app.use(express.json())

app.post('/animal/new',(req, res) => {

    const {id, nome, patas, classe} = req.body;
    try {
        nome.length
    } catch(error) {
        return res.status(401).send({ error: 'Json invalído' })
    }
    if(!id) {
        return res.json({ error: 'Json invalído' })
    } 
    data.push({
        "id": id,
        "nome": nome,
        "patas": patas,
        "classe": classe
    })
    res.json({ ok: true })
})

// app.delete('/animal/:id', (req, res) => {
//     data.
// })

app.listen(3000, () => {
    console.log('Rodando!!')
})
