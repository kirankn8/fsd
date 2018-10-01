const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('The app is up and running!'));

module.exports = router