var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({secret: 'heythisismysecretkey'}));
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/quotingDojo');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quote: {type: String, required: true}
}, {timestamps : true})

mongoose.model("Quote", QuoteSchema)
var Quote = mongoose.model('Quote')

var path = require('path');
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res){

    res.render('index', {errors : req.session.errors})
})
app.post('/quote', function(req, res){
    var newQuote = new Quote();
    newQuote.name = req.body.name;
    newQuote.quote = req.body.quote;
    newQuote.save(function(err){
        if(err){
            console.log(err)
            req.session.errors = newQuote.errors;
            res.redirect('/')
        }
        else{
            res.redirect('/quotes')
        }
        
    })
})
app.get('/quotes', function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
            console.log(err)
        
        }
        res.render('quotes', {allQuotes : quotes})
    })
    
})
app.listen(8000, function(){
    console.log("listening on port 8000")
})


