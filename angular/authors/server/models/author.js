var mongoose = require('mongoose')
var AuthorSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "Name is required!"],
        trim : true
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

mongoose.model('Author', AuthorSchema);
