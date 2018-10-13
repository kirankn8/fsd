const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql');
const config = require('./config');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const passport = require('passport');
const cookieParser = require('cookie-parser')
const generate_schema = require('./api/models/schema');
const LocalStrategy = require('passport-local').Strategy;

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

var options = {
    host: config.host,
    port: 3306,
    user: config.user,
    password: config.password,
    database: config.database,
};
var sessionStore = new MySQLStore(options);


//  Middlewares
app.use(session({
    name: 'some_session',
    secret: 'lalala',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: false, domain: '127.0.0.1:9000' },
    store: sessionStore
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// Authentication settings
passport.serializeUser(function (user, done) {
    console.log(user);
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    console.log('>>>>>', user);
    done(err, user);
    // User.findById(id, function (err, user) {

    //     done(err, user);
    // });
});

passport.use(new LocalStrategy(
    function (username, password, done) {
        connection.query(`SELECT id, username, password FROM User where username="${username}" LIMIT 1`, function (err, result, fields) {
            if (err)
                return done(err);
            console.log(result[0])
            if (result[0] != undefined) {
                if (result[0].password == password)
                    return done(null, { username: result[0].username, id: result[0].id });
            }
            return done(null, { username: false, id: null });
        });
    }
));


// Routes
app.use('/', routes);

app.listen(config.serverport, () => {
    console.log('E-Stationary Mart Backend is listening on port: ' + config.serverport)
});