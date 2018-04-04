var express = require("express");

var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("index")
})

app.post('/submit', function(req, res){
    var results = {
        name: req.body.name,
        location : req.body.location,
        language : req.body.language,
        comment : req.body.comment
    }
    res.render('results', {result : results })
})


app.listen(8000, function() {
    console.log("listening on port 8000");
  })