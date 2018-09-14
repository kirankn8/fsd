const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// DB configuration
mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('DB connection succesfully established')
});

var QuotesModelSchema = new Schema({
    quote: String,
    author: String,
});

var QuotesSchema = mongoose.model('QuotesModel', QuotesModelSchema);

function insertQuote() {
    var quote = new QuotesSchema({
        quote: 'I want to put a ding in the universe.',
        author: 'Steve Jobs'
    });
    quote.save(function (err, docs) {
        if (err) console.log(err);
        else
            console.log(docs);
    });
}

function selectQuote() {
    QuotesSchema.find({}, function (err, docs) {
        if (err) console.log(err);
        else
            console.log(docs);
    })
}