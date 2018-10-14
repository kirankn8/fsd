const userSchema = require('../models/user.schema');

exports.list_users = function (req, res) {
    userSchema.find({}, function (err, docs) {
        res.json(docs);
    })
}

exports.get_user = function (req, res) {
    userSchema.findById(req.params.id, function (err, docs) {
        if (err) res.json(err);
        res.json(docs);
    })
}

exports.save_user = function (req, res) {
    var userInstance = new userSchema(req.body);
    userInstance.save(function (err, docs) {
        if (err) res.json(err);
        res.json(docs);
    });
}

exports.save_user_documents = function (req, res) {
    userSchema.findById(req.params.id, function (err, user) {
        if (err) res.json(err);
        user.set({
            uploadedDocuments: {
                documentPath: 'String',
                description: 'String',
            }
        });
        user.save(function (err, updatedDocs) {
            if (err) res.json(err);
            res.send(updatedDocs);
        });
    });
}

exports.delete_user_documents = function (req, res) {
    userSchema.findById(req.params.id, function (err, user) {
        if (err) res.json(err);
        user.uploadedDocuments.id(req.params.documentId).remove();
        user.save(function (err, docs) {
            if (err) res.json(err);
            res.json(docs);
        });
    });
}