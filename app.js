var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./database/models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const session = require('express-session');


//session

app.use(session({
  secret: "odisea",
  resave: false,
  saveUninitialized: true,
}));

app.use(function(req, res, next){
  if (req.session.user != undefined) {
    res.locals.user = req.session.user
  }
  else{res.locals.user=null}
  return next()
})

app.use(function(req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) {

    const userId = req.cookies.userId;
    
    db.User.findByPk(userId)
    .then((user) => {
      req.session.user = user.dataValues;
      res.locals.user  = user.dataValues;
      return next();
    }).catch((err) => {
      console.log(err);
    });
  } else {
    return next();
  }
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
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
