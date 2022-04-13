var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
mongoose = require('mongoose');
var dolphin = require('./models/dolphinSchema');
const connectionString = process.env.MONGO_CON
heroku config:set MONGO_CON='your string'

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dolphinRouter = require('./routes/dolphin');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dolphin', dolphinRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Dolphin.deleteMany();
  let instance1 = new Dolphin(
    { name: "Murphy", age: 32, weight: 110 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });

  let instance2 = new Dolphin(
    { name: "Paddu", age: 24, weight: 120 });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });

  let instance3 = new Dolphin(
    { name: "Chocolate", age: 19, weight: 70 });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }

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
