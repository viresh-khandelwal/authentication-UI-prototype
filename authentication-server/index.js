const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// app.get('/', (req, res) => {
//     res.send('Welcome to Node API')
// })

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// app.get('/getData', (req, res) => {
//     res.json({'message': 'Hello World'})
// })

app.post('/authenticateUsername', bodyParser.json(), (req, res) => {
    //console.log(req.body);
    //res.json(req.body);
    res.send("user authenticated !!");
})