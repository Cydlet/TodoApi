//library imports
const express = require('express');
//take JSON and convert to object, attach to request
const bodyParser = require('body-parser')

//local imports
var{mongoose} = require('./db/mongoose');
var{Todo} = require('./models/todo');
var{User} = require('./models/user');

var app = express();
//middleware
app.use(bodyParser.json());

//resource creations(create new todo)
app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });

todo.save().then((doc)=>{
    res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    }); 
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});