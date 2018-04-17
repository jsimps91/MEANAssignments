var path = require('path');
var authors = require('../controllers/authors.js')
var quotes = require('../controllers/quotes.js')
module.exports = function(app){

    app.post('/api/authors', function(req, res){
        authors.create(req, res)
    })  
    app.get('/api/authors', function(req, res){
        authors.getAll(res, res)
    })
    app.delete('/api/authors/:id', function(req, res){
        authors.deleteAuthor(req, res)
    })
    app.get('/api/authors/:id', function(req, res){
        authors.getAuthorById(req, res)
    })
    app.put('/api/authors/:id', function(req, res){
        authors.updateAuthor(req, res)
    })
    app.get('/api/quotes/:id', function(req, res){
        quotes.getQuotes(req, res)
    })
    app.post('/api/quotes', function(req, res){
        quotes.addQuote(req, res)
    })
    app.delete('/api/quotes/:id/:authorId', function(req, res){
        quotes.deleteQuote(req, res)
    })
    app.get('/api/quotes/down/:id', function(req, res){
        quotes.downVote(req, res)
    })
    app.get('/api/quotes/up/:id', function(req, res){
        quotes.upVote(req, res)
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
      });
}