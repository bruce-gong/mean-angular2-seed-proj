var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = require('../models/post.model');

var CommentSchema = new Schema({
  body: String,
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  upvotes: {type: Number, default: 0},
  downvotes: {type: Number, default: 0}
});

CommentSchema.methods.upvote = function(cb) {
    this.upvotes += 1;
    this.save(cb);
};

CommentSchema.methods.downvote = function (cb) {
    this.downvotes += 1;
    this.save(cb);
}

module.exports = mongoose.model('Comment', CommentSchema);
