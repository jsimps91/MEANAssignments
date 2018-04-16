var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var QuoteSchema = new mongoose.Schema({
    text: { type: String,
        required: [true, "Quote is required!"],
        trim : true
    },
    _author: { type: Schema.Types.ObjectId, ref: 'Author' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

mongoose.model('Quote', QuoteSchema);
