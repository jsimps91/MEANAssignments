var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
app.use(session({secret: 'heythisismysecretkey'}));
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    if(!req.session.num){
        req.session.num = Math.round(Math.random()*100)
    }
    res.render('index', {message : req.session.message})
})
app.post('/guess', function(req, res){
    if(req.body.num == req.session.num){
        req.session.message = "Correct!"
    }
    else if(req.body.num < req.session.num){
        req.session.message = "Too low!"
    }
    else{
        req.session.message = "Too high!"
    }
    res.redirect('/')
})
app.get('/reset', function(req, res){
    req.session.num = Math.round(Math.random()*100)
    req.session.message = ""
    res.redirect('/')
})
app.listen(8000, function() {
    console.log("listening on port 8000");
  })