const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');



var MongoClient = require('mongodb').MongoClient;

// app.get('/', (req, res) => {
//     res.send('Welcome to Node API')
// })

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// app.get('/getData', (req, res) => {
//     res.json({'message': 'Hello World'})
// })

app.post('/authenticateUsername', bodyParser.json(), (req, res) => {
    console.log(req.body);  
    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        if (err) throw err;
        var db = client.db('authenticationDB');
        db.collection('usernames', function (err, collection) {       
            collection.find({ name: req.body.username}).toArray(function(err, items) {
                if(err) throw err;                 
                if(items.length !== 0){
                    var token = jwt.sign({username: req.body.username}, 'authentication-app-super-shared-secret-1707', {expiresIn: '2h'});
                    res.send({token})
                }else{
                    res.sendStatus(401);
                }
            });
        });

    });

    
})