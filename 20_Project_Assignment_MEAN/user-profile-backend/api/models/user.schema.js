var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    ssoId: String,
    uploadedDocuments: [
        {
            documentPath: String,
            description: String,
        }
    ],
});

module.exports = mongoose.model('User', userSchema);