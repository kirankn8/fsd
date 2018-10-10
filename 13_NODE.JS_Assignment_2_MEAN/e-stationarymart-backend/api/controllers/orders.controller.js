const mysql = require('mysql');
const config = require('../../config');

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

exports.all_orders = function (req, res) {
    connection.query("SELECT * FROM PurchaseOrder", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
}

exports.cart_items = function (req, res) {
    connection.query("SELECT Product.id, Product.name, Product.price FROM Product \
                      JOIN Cart on Cart.productid = Product.id\
                      JOIN PurchaseOrder on Cart.orderid = "+ req.params.orderid
        , function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
}

exports.place_orders = function (req, res) {
    connection.query(`INSERT INTO PurchaseOrder (total_price) VALUES ('${req.body.totalPrice}')`, function (err, poresult, fields) {
        if (err) throw err;
        var values = [];
        console.log(req.body);
        for (var i = 0; i < req.body.cart.length; i++) {
            values.push([req.body.cart[i].id, poresult.insertId, req.body.cart[i].qty]);
        }
        connection.query(`INSERT INTO Cart (productid, orderid, qty) VALUES ?`, [values], function (err, cresult, fields) {
            if (err) throw err;
            res.json(cresult);
        });
    });
}
