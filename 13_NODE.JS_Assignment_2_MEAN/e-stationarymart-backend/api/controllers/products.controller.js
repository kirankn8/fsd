const mysql = require('mysql');

const my_credentials = {
    host: "localhost",
    user: "username",
    password: "password",
    database: "eMart"
}

const connection = mysql.createConnection({
    host: my_credentials.host,
    user: my_credentials.user,
    password: my_credentials.password,
    database: my_credentials.database
});

exports.all_products = function (req, res) {
    connection.query("SELECT * FROM product", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
}

exports.product_by_id = function (req, res) {
    connection.query(`SELECT * FROM product where id=${req.params.id} LIMIT 1`, function (err, result, fields) {
        if (err) throw err;
        res.json(result[0]);
    });
}
