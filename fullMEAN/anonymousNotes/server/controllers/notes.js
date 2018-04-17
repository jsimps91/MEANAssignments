var mongoose = require('mongoose')
var Note = mongoose.model("Note")
module.exports = {
    createNote : function(req, res){
        var note = new Note()
        note.text = req.body.note
        note.save(function(err, note){
            if(err){
                res.json({status: 'error'})
            }
            else{
                Note.find().sort({createdAt : -1}).exec(function(err, notes){
                    if(err){
                        res.json({status: 'error'})
                    }
                    else{
                        res.json({status: 'success', notes : notes})
                    }
                })
            }
        })
    },
    getNotes : function(req, res){
        Note.find({}).sort({createdAt : -1}).exec(function(err, notes){
            if(err){
                res.json({status: 'error'})
            }
            else{
                res.json({status: 'success', notes : notes})
            }
        })
    }
}