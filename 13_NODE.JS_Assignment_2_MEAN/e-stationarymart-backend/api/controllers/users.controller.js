const mysql = require('mysql');
const config = require('../../config');

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

exports.user_by_username = function (req, res) {
    connection.query(`SELECT id FROM User where username=${req.body.username} and password=${req.body.password} LIMIT 1`, function (err, result, fields) {
        if (err) throw err;
        res.json(result[0]);
    });
}