var express = require( "express");
var path = require( "path");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
})

var server = app.listen(8000, function(){
    console.log("Listening on port 8000")
})
var io = require('socket.io').listen(server);
 var messages = []
io.sockets.on("connection", function(socket){
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.emit("new_user", messages)
    socket.on("new_message", function(data){
        console.log(data)
        messages.push(data)
        io.emit("send_message", data)
    })
})