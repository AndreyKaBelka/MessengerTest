let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let routerConfig = require('./api');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(function (req, res, next) {
  res.set({
    "intercom-version": 1.3,
    "x-intercom-version": "dfdf48c1e778f2ef8347e581a8f83109a6f0be89",
  });
  next();
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send("Error happened");
});

routerConfig(app);

module.exports = app;
