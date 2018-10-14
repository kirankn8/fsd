var express = require('express');
var router = express.Router();

const user_profile = require('./controllers/user_profile.controller');

router.get('/users/', user_profile.list_users);

router.post('/user/', user_profile.save_user);

router.get('/user/:id', user_profile.get_user);

router.post('/user/:id/document/', user_profile.save_user_documents);

router.delete('/user/:id/document/:documentId', user_profile.delete_user_documents);

module.exports = router;