const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
let con=require("./config/db.js");
let router = require('./routes/regrouts.js');
let cookie=require("cookie-parser");
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

app.use(session({
  secret: 'SKAY@GMAIL.COM',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 24 * 60 * 60 * 1000  
  }
}));
app.use("/",router)
app.set('view engine', 'ejs');
app.set('views', './views');
module.exports=app;