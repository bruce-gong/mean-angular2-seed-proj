var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Post = require('../models/post.model');
var User = require('../models/user.model');
var Comment = require('../models/comment.model');

// Get all posts
router.get('/', function (req, res, next) {
    Post.find()
        // Add firstName property to user object
        .populate('user', 'firstName')
        .populate('comments')
        .exec(function (err, docs) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        });
});

router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Authentication failed',
                error: err
            });
        }
        next();
    });
});

// Create a Post
router.post('/', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        var post = new Post({
            title: req.body.title,
            content: req.body.content,
            user: doc
        });
        post.save(function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            doc.posts.push(result);
            doc.save();
            res.status(201).json({
                message: 'Post Added',
                obj: result
            });
        });
    });
});

// Upvotes a post
router.patch('/:id/upvote', function(req, res, next) {
    Post.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No post found',
                error: {message: 'Post could not be found'}
            });
        }
        doc.upvote(function(err, post){
            if (err) { return next(err); }

            res.json(post);
        });
    });
});

// Downvotes a post
router.patch('/:id/downvote', function(req, res, next) {
    Post.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No post found',
                error: {message: 'Post could not be found'}
            });
        }
        doc.downvote(function(err, post){
            if (err) { return next(err); }

            res.json(post);
        });
    });
});

// Comments routes

// Add a comment
router.post('/:id/comment', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, userDoc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        Post.findById(req.params.id, function(err, doc) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!doc) {
                return res.status(404).json({
                    title: 'No post found',
                    error: {message: 'Post could not be found'}
                });
            }

            var comment = new Comment(req.body);
            comment.post = doc;
            comment.author = userDoc.firstName;
            comment.save(function(err, result) {
                if (err) {
                    return res.status(404).json({
                        title: 'An error occured',
                        error: err
                    });
                }
                doc.comments.push(result);
                doc.save();
                res.status(201).json({
                    message: 'Comment Added',
                    obj: result
                });
            });
        });
    });
});

// Upvotes a comment
router.patch('/:postId/comment/:commentId/upvote', function(req, res, next) {
    Comment.findById(req.params.commentId, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No comment found',
                error: {message: 'Comment could not be found'}
            });
        }
        doc.upvote(function(err, comment){
            if (err) { return next(err); }
            res.json(comment);
        });
    });
});

// Downvotes a comment
router.patch('/:postId/comment/:commentId/downvote', function(req, res, next) {
    Comment.findById(req.params.commentId, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No comment found',
                error: {message: 'Comment could not be found'}
            });
        }
        doc.downvote(function(err, comment){
            if (err) { return next(err); }
            res.json(comment);
        });
    });
});

module.exports = router;
