// Require express to make easy
// routing on server side.
const express = require("express");
require("dotenv").config();
const router = require('./routes')
const {serverConnection} = require('./src/db')

// Creating express object
const app = express();

// Require path module
const path = require('path');

// Require pug template engine
const pug = require("pug");

// Require mongoose to use mongoDb
// in a easier way

// Define a port number
const port = 3000;

// Make a static route to use your
// static files in client side
app.use('/static', express.static('static'));

// Middleware for parsing
app.use(express.urlencoded( {extended: true }));

// Define and use pug engine so also
// declare path on rendering
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//router  level middleware
app.use('/', router)

serverConnection()
// Server setup
app.listen(port, () => {
	console.log("server is running");
});
