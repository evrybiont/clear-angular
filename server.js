/*var gzippo = require('gzippo');*/
/*var express = require('express');*/
/*var morgan = require('morgan');*/
/*var app = express();*/
 
/*app.use(morgan('combined'));*/
/*app.use(gzippo.staticGzip("" + __dirname + "/dist"));*/
/*app.listen(process.env.PORT || 5000);*/

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
/*var mongodb = require("mongodb");*/
/*var ObjectID = mongodb.ObjectID;*/

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());
