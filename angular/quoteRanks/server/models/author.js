var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var AuthorSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "Name is required!"],
        trim : true
    },
    quotes: [{ type: Schema.Types.ObjectId, ref: 'Quote' }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

mongoose.model('Author', AuthorSchema);
