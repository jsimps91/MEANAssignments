var mongoose = require('mongoose');

var Elephant = mongoose.model('Elephant');

module.exports = {
    index: function (req, res) {
        Elephant.find({}, function (err, elephants) {
            if (err) {
                console.log(err)
            }
            res.render('index', { allElephants: elephants })
        })
    },
    new: function (req, res) {
        res.render('new')
    },
    create: function (req, res) {
        var newElephant = new Elephant();
        newElephant.name = req.body.name;
        newElephant.imgUrl = req.body.imageUrl;
        newElephant.save(function (err) {
            if (err) {
                console.log(err)
            }
            res.redirect('/')
        })
    },
    findOne: function (req, res) {
        Elephant.findOne({ _id: req.params.id }, function (err, ele) {
            if (err) {
                console.log(err)
            }
            res.render('elephantProfile', { elephant: ele })
        })
    },
    edit: function (req, res) {
        Elephant.findOne({ _id: req.params.id }, function (err, ele) {
            if (err) {
                console.log(err)
            }
            res.render('editElephant', { elephant: ele })
        })
    },
    update : function(req, res){
        Elephant.update({_id: req.params.id}, req.body, function(err){
            if(err){
                console.log(err)
            }
            res.redirect('/')
        })
    },
    delete : function(req, res){
        Elephant.remove({_id : req.params.id}, function(err){
            if(err){
                console.log(err)
            }
            console.log('hi')
            res.redirect('/')
        })
    }
}