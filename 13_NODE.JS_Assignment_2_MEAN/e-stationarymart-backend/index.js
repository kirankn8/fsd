const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql');
const config = require('./config');
const session = require('express-session');
const generate_schema = require('./api/models/schema');

const app = express();

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

generate_schema(connection, config);

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