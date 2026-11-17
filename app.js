var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const {Int32} = require("mongodb");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

const url = process.env.CONNECTION_URL;
const connDb = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB Cloud');
  } catch (error) {
    console.log('Database connection failure', error);
  }
}

const workSchema = new mongoose.Schema({
  _id: {type: String, required: true},
  title: {type: String, required: true},
  fandomTags: {type: Array, required: true},
  relationshipTags: {type: Array, required: true},
  generalTags: {type: Array, required: true},
  authorId: {type: String, required: true},
  published: {type: Date, required: true},
  lastEdited: {type: Date, required: true},
  chapters: {type: Array, required: true},
  summary: {type: String, required: true},
  likes: {type: Int32},
  comments: {type: Array},
  anonymous: {type: Boolean, required: true},
  userLikes: {type: Array, required: true},
})

const Work = new mongoose.model("Works", workSchema);

module.exports = app;
