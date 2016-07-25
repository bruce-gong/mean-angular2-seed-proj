var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user.model');
var Comment = require('../models/comment.model');

var PostSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    upvotes: {type: Number, default: 0},
    downvotes: {type: Number, default: 0},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

PostSchema.methods.upvote = function(cb) {
    this.upvotes += 1;
    this.save(cb);
};

PostSchema.methods.downvote = function (cb) {
    this.downvotes += 1;
    this.save(cb);
}
module.exports = mongoose.model('Post', PostSchema);
