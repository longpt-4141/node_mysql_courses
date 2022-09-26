const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const configViewEngine = require('./configs/viewEngine')
const app = express()
require('dotenv').config();

const port = process.env.PORT || 8080;

const methodOverride = require('method-override')

const db = require('./config/dbSequelize');

const route = require('./routes');

app.use(express.json()) 
app.use(
  express.urlencoded({
      extended: true,
  }),
);

// config viewEngine
configViewEngine(app);

//connect to database
db.connect()

//use morgan : HTTP logger
app.use(morgan('tiny'))
// index page

// override method 
app.use(methodOverride('_method'))

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})