var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db=require('./config/connection')
var session=require('express-session')




var usersRouter = require('./routes/user/users');
var adminRouter=require('./routes/admin/admin')
var adminactions=require('./routes/admin/adminactions')

var app = express();
app.use(session({ secret: "key", cookie: { maxAge: 60000000 } }))
app.use((req, res, next) => {
  res.set('Cache-Control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0')
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
db.connect((err)=>{
  console.log("========================================================================");
  if(err){
    console.log("Databasse Error"+err);
  }
  else{
    console.log("Database Connected");
  }
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', usersRouter);
app.use('/admin',adminRouter)
app.use('/adminactions',adminactions)
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
