var elephants = require('../controllers/elephants.js')
module.exports = function(app){
    app.get('/', function(req, res){
        elephants.index(req, res)
    }),
    app.get('/elephants/new', function(req, res){
        elephants.new(req, res)
    }),
    app.post('/elephants', function(req, res){
        elephants.create(req, res)
    }),
    app.get('/elephants/:id', function(req, res){
        elephants.findOne(req, res)
    }),
    app.get('/elephants/edit/:id', function(req, res){
        elephants.edit(req, res)
    }), 
    app.post('/:id', function(req, res){
        elephants.update(req, res)
    })
    app.post('/elephants/:id/delete', function(req, res){
        elephants.delete(req, res)
    })
}