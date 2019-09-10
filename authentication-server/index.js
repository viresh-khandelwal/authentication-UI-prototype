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

let usernames = ['viresh','charu','shweta','sakshi','samiksha','shriya','tushi']
app.post('/authenticateUsername', bodyParser.json(), (req, res) => {
    console.log(req.body);
    if(usernames.indexOf(req.body.username)  !== -1){
        res.send({userAuthenticated: true});
    }else{
        res.send({userAuthenticated: false});
    }    
})