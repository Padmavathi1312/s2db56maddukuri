var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Chooseyourconnection:padma@cluster0.2h8dj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var dolphin = require("./models/dolphin");
var dolphinRouter = require("./routes/dolphin");
var resourceRouter = require('./routes/resource');

// We can seed the collection if needed onserver start
async function recreateDB() {
  // Delete everything
  await dolphin.deleteMany();
  let instance1 = new
    dolphin({ name: "Dolphin", age: 34, weight: 56 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });

  // We can seed the collection if needed onserver start

  let instance2 = new
    dolphin({
      name: "Bottlenose", age: 76,
      weight: 97
    });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });

  let instance3 = new
    dolphin({
      name: "Amazon River Dolphin", age: 54 ,
      weight: 43
    });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }
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
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/dolphin', dolphinRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

module.exports = app;
