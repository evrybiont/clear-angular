var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());
