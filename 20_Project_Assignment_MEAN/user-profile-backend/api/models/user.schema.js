var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    ssoId: String,
    uploadedDocuments: [
        {
            filename: String,
            documentPath: String,
            mimetype: String,
            description: String,
        }
    ],
});

module.exports = mongoose.model('User', userSchema);