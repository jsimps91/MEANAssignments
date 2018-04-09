var express = require('express');
var app  = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
app.use(bodyParser.urlencoded({extended : true}))
mongoose.connect('mongodb://localhost/elephantDash')

var ElephantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    imgUrl: {type: String, required: true}
})

mongoose.model("Elephant", ElephantSchema)
var Elephant = mongoose.model('Elephant')

var path = require('path');
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res){
    Elephant.find({}, function(err, elephants){
        if(err){
            console.log(err)
        }
        res.render('index', {allElephants : elephants})
    })
    
})  
app.get('/elephants/new', function(req, res){
    res.render('new')
})
app.post('/elephants', function(req, res){
    var newElephant = new Elephant();
    newElephant.name = req.body.name;
    newElephant.imgUrl = req.body.imageUrl;
    newElephant.save(function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
})
app.get('/elephants/:id', function(req, res){
    Elephant.findOne({_id : req.params.id}, function(err, ele){
        if(err){
            console.log(err)
        }
        console.log(ele)
        res.render('elephantProfile', {elephant : ele})
    })
    
})
app.get('/elephants/edit/:id', function(req, res){
    Elephant.findOne({_id : req.params.id}, function(err, ele){
        if(err){
            console.log(err)
        }
        res.render('editElephant', {elephant : ele})
    })
})
app.post('/:id', function(req, res){
    Elephant.update({_id: req.params.id}, req.body, function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
})
app.post('/elephants/:id/delete', function(req, res){
    Elephant.remove({_id : req.params.id}, function(err){
        if(err){
            console.log(err)
        }
        console.log('hi')
        res.redirect('/')
    })
})
app.listen(8000, function(){
    console.log("listening on port 8000")
})