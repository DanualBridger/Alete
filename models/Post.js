var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    content: { type: String, default: ''}
});

module.exports = mongoose.model('Post', postSchema);
