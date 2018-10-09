const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql');
const config = require('./config');
const session = require('express-session');
const generate_schema = require('./api/models/schema');

const app = express();

const my_credentials = {
    host: "localhost",
    user: "username",
    password: "password",
    database: "eMart"
}

var connection = mysql.createConnection({
    host: my_credentials.host,
    user: my_credentials.user,
    password: my_credentials.password
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

generate_schema(connection, my_credentials);

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