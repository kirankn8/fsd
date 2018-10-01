const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('./config');
const session = require("express-session");

const app = express();

// DB configuration
// TODO: Change to MySQL
mongoose.connect(config.db_url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('DB connection succesfully established')
});

//  Middlewares
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/', routes);

app.listen(config.port, () => {
    console.log('E-Stationary Mart Backend is listening on port: ' + config.port)
});