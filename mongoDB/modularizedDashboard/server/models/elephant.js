var mongoose = require('mongoose');

var ElephantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    imgUrl: {type: String, required: true}
})

mongoose.model("Elephant", ElephantSchema)
var Elephant = mongoose.model('Elephant')