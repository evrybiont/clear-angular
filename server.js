/*var express = require("express");*/
/*var path = require("path");*/
/*var bodyParser = require("body-parser");*/
/*var app = express();*/
/*app.use(express.static(__dirname + "/app"));*/
/*app.use(bodyParser.json());*/
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
