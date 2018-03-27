var http = require('http');
var database = require('./sequelize-test')
var express = require('express')
var app = express();



app.get('/', function(req, res) {
  database.then(function(data){
    res.send(data)
  })
});

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});