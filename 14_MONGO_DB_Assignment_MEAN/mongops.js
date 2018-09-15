/* 
    1. Write a program to create database in mongodb using node.js
    On establishing MongoDB connection, creation of database is implicit based on the URL
    Name provided for the database: testdb
*/


const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// DB configuration
mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('MongoDB connection succesfully established')
});

var QuotesModelSchema = new Schema({
    quote: String,
    author: String,
});

var QuotesSchema = mongoose.model('QuotesModel', QuotesModelSchema);


/* 
    2. Write a program to insert data into mongodb using node.js
*/
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


/* 
    3. Write a program to select data from mongodb using node.js
*/
function selectQuote() {
    QuotesSchema.find({}, function (err, docs) {
        if (err) console.log(err);
        else
            console.log(docs);
    })
}

insertQuote();
selectQuote();