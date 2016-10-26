/**
 * Created by colinstclaire on 10/25/16.
 */
var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.set('port', 3000);