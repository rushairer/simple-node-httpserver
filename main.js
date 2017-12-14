var port = 8080;
var express = require('express');
var ejs = require('ejs');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    var data = {
        view: 'index'
    };
    res.render('layout', data);
});

app.listen(port);
console.log('Server is running on port: ' + port);
