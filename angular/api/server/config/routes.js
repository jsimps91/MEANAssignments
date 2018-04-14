var tasks = require('../controllers/pokemons.js')
module.exports = function(app){
    app.get('/', function(req, res){
        tasks.index(req, res)
    })

}