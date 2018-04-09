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
var clickCount = 0
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.emit("add", {count : clickCount})
    socket.on( "count", function (data){
        clickCount += 1
        io.emit("add", {count : clickCount});

    })
  })