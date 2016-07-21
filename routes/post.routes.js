var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Post = require('../models/post.model');
var User = require('../models/user.model');

router.get('/', function (req, res, next) {
    Post.find()
        .populate('user', 'firstName')
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

router.patch('/:id/upvote', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
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

router.patch('/:id/downvote', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
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

module.exports = router;
