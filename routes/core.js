var fs = require("fs"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    User = require('../models/User'),
    Post = require('../models/Post'),
    _ = require('underscore');

module.exports = function (app) {
    app.get('/', function(req, res){
        Post.find({}, null, {sort: {'_id': -1}}).populate('owner').exec(function(err, posts) {
            res.render('index', {
                posts: posts
            });
        });
    });
};
