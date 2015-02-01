var express = require('express'),
    jade = require('jade'),
    path = require('path'),
    mongoose = require('mongoose'),
    lessMiddleware = require('less-middleware'),
    marked = require ('marked'),
    app = express();

mongoose.connect('mongodb://localhost:27017/social-demo', function() {
    console.error('Connected to MongoDB.');
});
mongoose.connection.on('error', function() {
    console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});

app.locals.md = marked;

app.set('views', path.resolve(__dirname + '/views'));
app.set('view engine', 'jade');
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

require('./routes.js')(app);

app.listen(3000);
