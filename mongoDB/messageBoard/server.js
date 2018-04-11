var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var session = require('express-session')
app.use(session({secret: 'hithisismysecretkey'}));
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost/messagesBoard')
var path = require('path');
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    text: String,
    name: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });
mongoose.model("Message", MessageSchema)
var Message = mongoose.model('Message')
MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('text').required(true, 'Message cannot be blank');
var CommentSchema = new mongoose.Schema({
    _message: { type: Schema.Types.ObjectId, ref: 'Message' },
    text: String,
    name: String
}, { timestamps: true });
mongoose.model("Comment", CommentSchema)
var Comment = mongoose.model('Comment')
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('text').required(true, 'Message cannot be blank');

app.get('/', function(req, res){
    Message.find({}).populate('comments')
    .exec(function(err, messages){
        if(err){
            console.log("Error: ", err)
        }
        res.render('index', {messages : messages, errors : req.session.errors})
    })
    
})
app.post('/message', function(req, res){
    var message = new Message(req.body)
    message.save(function(err){
        if(err){
            console.log(err)
            req.session.errors = message.errors
        }
        else{
            req.session.destroy();
        }
        res.redirect('/')
    })
})
app.post('/comment/:id', function(req, res){
    Message.findOne({_id: req.params.id}, function(err, message){
       var comment = new Comment(req.body)
       comment._message = message._id;
       comment.save(function(err){
           message.comments.push(comment)
           message.save(function(err){
               if(err){
                   console.log("error: ", err)
               }
                res.redirect('/')
           })
       })
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000")
})