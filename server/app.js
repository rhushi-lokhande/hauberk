var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var join = path.join;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let passport = require('passport');
var session = require('express-session')
var auth = require('./routes/auth');
var secureRoute = require('./routes/secureRoute');
var config = require('./config');

let app = express();
app.set('port', process.env.PORT  || config.port); // Set port to 3000 or the provided PORT variable
// to connect to mogo database
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);
connect();

function connect() {
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect(config.mongoConnection, options);
}


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}))


require('./controller/login/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '../dist')));
app.use(logger('dev')); // Log requests to the console
app.use(bodyParser.json()); // Parse JSON data and put it into an object which we can access
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text({ type: 'text/plain' }));

app.use(function(req, res, next) {
    if (req.headers['content-type'] == "text/plain;charset=UTF-8") {
        req.body = JSON.parse(req.body)
    }
    return next();
});
//routing api
app.use('/auth', auth);
app.use('/api/', ensureAuthenticated, secureRoute);

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/login')
}
//to load  home  page
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//for loggin    
app.use(logger('dev'));


module.exports = app;