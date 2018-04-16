var mongoose = require('mongoose');
var Author = mongoose.model('Author');
var Quote = mongoose.model('Quote')
module.exports = {
    getQuotes : function(req, res){
        Author.findOne({_id : req.params.id}).populate('quotes').exec(function(err, author){
            if(err){
                res.json({status : 'error'})
            }
            else{
                res.json({status : 'success', author : author})
            }
        })
    }, 
    addQuote : function(req, res){
        var quote = new Quote()
        quote.text = req.body.quote;
        quote._author = req.body.id;
        quote.save(function(err){
            if(err){
                res.json({status : 'error'})
            }
            else{
                Author.findOne({_id : req.body.id}, function(err, author){
                    if(err){
                        res.json({status : 'error'})
                    }
                    else{
                        author.quotes.push(quote);
                        author.save(function(err){
                            if(err){
                                res.json({status : 'error'})
                            }
                            else{
                                res.json({status : 'success'})
                            }
                        })
                    }
                })
            }
        })
    },
    deleteQuote : function(req, res){
        Quote.deleteOne({_id : req.params.id}, function(err){
            if(err){
                res.json({status : 'error'})
            }
            else{
                Author.findOne({_id : req.params.authorId}).populate('quotes').exec(function(err, author){
                    if(err){
                        res.json({status : 'error'})
                    }
                    else{
                        res.json({status : 'success', author : author})
                    }
                })
                
            }
        })
    }
}