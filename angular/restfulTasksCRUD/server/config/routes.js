var tasks = require('../controllers/tasks.js')
module.exports = function(app){
    app.get('/', function(req, res){
        tasks.index(req, res)
    })
    app.get('/tasks/:id', function(req, res){
        tasks.findOne(req, res)
    }),
    app.get('/tasks', function(req, res){
        console.log("getting tasks in routes")
        tasks.findAll(req, res)
    }),
    app.post('/tasks', function(req, res){
        console.log("in routes, task ", req.body)
        tasks.create(req, res)
    }), 
    app.put('/tasks/:id', function(req, res){
        tasks.update(req, res)
    }),
    app.delete('/tasks/:id', function(req, res){
        tasks.delete(req, res)
    })
}