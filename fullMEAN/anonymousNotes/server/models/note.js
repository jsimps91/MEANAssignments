var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var NoteSchema = new mongoose.Schema({
    text: { type: String,
        required: [true, "Note is required!"],
        trim : true, 
        minlength : [3, "Note must be at least 3 characters"]
    }
    
}, {timestamps : true})

mongoose.model('Note', NoteSchema);