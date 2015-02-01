var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title: {
        type: String
    }
});

module.exports = mongoose.model('Post', postSchema);
