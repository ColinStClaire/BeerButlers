/**
 * Created by colinstclaire on 10/25/16.
 */

var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.set('port', 3000);

// all middleware needs to send() or next()


app.use(function (req, res, next) {
    console.log(req.URL);
    // Website sending requests
    res.setHeader('Access-Control-Allow-Origin', 'http://52.40.59.238');
    // Request method that you are allowing (we are using GET)
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    // Request header types that are allowed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // The following is set to false since we won't be addressing cookies and sessions
    res.setHeader('Access-Control-Allow-Credentials', false);
    // Proceed to the next layer of middleware
    next();
});

function processData(req) {
    var context = {};
    context.method = req.method; //method type saved
    context.qParams = []; //query parameters
    for(var p in req.query) {
        context.qParams.push({
            'name': p,
            'value': req.query[p]
        });
    }
    return context;
}

app.get('/', function(req, res, next) { // request, response, next
    var userInput = processData(req);
    request("https://api.brewerydb.com/v2/search?key=3dad4576e0edfa7128dbb5831f6968b8&q=" + userInput.qParams[0].value, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.send(body);
        }
    });
});


app.listen(app.get('port'), function(){
    console.log('Express started on port' + app.get('port') + '; press Ctrl-C to terminate.');
});