var express = require( "express");
var path = require( "path");
var bodyParser = require('body-parser');
// Create the express app.
var app = express();
// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
app.get('/', function(req, res) {
 res.render("index");
})
// Start Node server listening on port 8000.
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.on( "posting_form", function (data){
        console.log( 'data '  + data);
        var response = {
            name : data.name, 
            location : data.location,
            language : data.language,   
            comment : data.comment
        }
        var num = Math.round(Math.random()*1000)
        socket.emit( 'server_response', {response_data:  response, lucky_number : num });
    })
  })