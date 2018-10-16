const userSchema = require('../models/user.schema');
var multer = require('multer');
var DIR = './uploads/files/';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DIR)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage }).single('file');
// var upload = multer({ dest: DIR, preservePath: true }).single('file');

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
    upload(req, res, function (err) {
        if (err) return res.status(422).send("an Error occured: " + err);
        userSchema.findById(req.params.id, function (err, user) {
            if (err) res.json(err);
            console.log(req.file);
            user.uploadedDocuments.push({
                filename: req.file.originalname,
                documentPath: req.file.path.replace(/\\/g, '/').replace(/uploads/g, ''),
                mimetype: req.file.mimetype,
                description: req.body.description,
            });
            user.save(function (err, updatedDocs) {
                if (err) res.json(err);
                res.send(updatedDocs);
            });
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