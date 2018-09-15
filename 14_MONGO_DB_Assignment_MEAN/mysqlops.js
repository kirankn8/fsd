var mysql = require('mysql');

var my_credentials = {
    host: "localhost",
    user: "username",
    password: "password",
    database: "testdb"
}

var con = mysql.createConnection({
    host: my_credentials.host,
    user: my_credentials.user,
    password: my_credentials.password
});

con.connect(function (err) {
    if (err) throw err;
    console.log("MySQL DB connection succesfully established");

    /* 
        4. Write a program to create database in MySql using node.js.
    */
    con.query(`CREATE DATABASE ${my_credentials.database}`, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });

    con.changeUser({
        database: my_credentials.database
    }, function (err) {
        if (err) {
            console.log('Error in changing database', err);
            return;
        }
    });

    var createTable = "CREATE TABLE IF NOT EXISTS Quotes (quote VARCHAR(255), author VARCHAR(255))";
    con.query(createTable, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

    /* 
        5. Write a program to insert data into Mysql using node.js.
    */
    var insertRecord = "INSERT INTO Quotes (quote, author) VALUES ('Price is what you pay. Value is what you get.', 'Warren Buffett')";
    con.query(insertRecord, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });


    /* 
        6. Write a program to select data from Mysql using node.js.
    */
    con.query("SELECT * FROM Quotes", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

});
