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

// Get new player form
app.get("/game", function(req, res) {
	res.render("./game");
});

// // Serve the main game page
// app.get("/game", function(req, res) {
// 	db.cahplayer.findAll().then(function(article) {
// 		res.render("./game", {cahplayer: cahplayer});
// 	});
// });



// LISTEN
app.listen(3000); 