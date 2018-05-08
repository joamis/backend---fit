let config = require('./config');
let mongoose = require('mongoose');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mealsRouter = require('./routes/meals');
var mealsHistoryRouter = require('./routes/mealsHistory');
let imageRouter = require('./routes/images');
let app = express();

app.set('privateKey', config.privateKey)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
let cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));


mongoose.connect(config.database);
let db = mongoose.connection;


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/meals', mealsRouter);
app.use('/mealsHistory', mealsHistoryRouter);
app.use('/image', imageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
