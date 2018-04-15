var path = require('path');
var authors = require('../controllers/authors.js')
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
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
      });
}