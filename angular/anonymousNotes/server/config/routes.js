var Notes = require('../controllers/notes.js')
var path = require('path')
module.exports = function(app){
    app.post('/api/notes', function(req, res){
        Notes.createNote(req, res)
    })
    app.get('/api/notes', function(req, res){
        Notes.getNotes(req, res)
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
      });
}