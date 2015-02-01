var express = require('express'),
    jade = require('jade'),
    path = require('path'),
    mongoose = require('mongoose'),
    lessMiddleware = require('less-middleware'),
    app = express();

app.set('views', path.resolve(__dirname + '/views'));
app.set('view engine', 'jade');
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

require('./routes.js')(app);

app.listen(3000);
