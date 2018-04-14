var tasks = require('../controllers/tasks.js')
module.exports = function(app){
    app.get('/tasks/:id', function(req, res){
        tasks.findOne(req, res)
    }),
    app.get('/tasks', function(req, res){
        tasks.findAll(req, res)
    }),
    app.post('/tasks', function(req, res){
        tasks.create(req, res)
    }), 
    app.put('/tasks/:id', function(req, res){
        tasks.update(req, res)
    }),
    app.delete('/tasks/:id', function(req, res){
        tasks.delete(req, res)
    })
}