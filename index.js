// REQUIRES
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");


// APP VARIABLES
var app = express();
var db = require("./models"); 


// SET/USE STATEMENTS
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('static'))
app.use(express.static('files'))


//ROUTES

// Serve the homepage
app.get("/", function(req, res) {
 	res.render("index");
});

// Serve main game page
app.get("/game", function(req, res) {
	res.render("./game");
});

// Serve scores page
app.get("/scores", function(req, res) {
	res.render("./scores");
});


// LISTEN
app.listen(3000); 