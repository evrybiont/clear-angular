var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());

app.get('/', function (req, res) {
})

app.listen(process.env.PORT || 3000);
