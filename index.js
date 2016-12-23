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

// Displays history of card combos
app.get("/history", function(req, res) {
	db.cahcard.findAll().then(function(cahcard) {
		res.render("./history", {cahcard: cahcard});
	});
});

// Adds to card combos
app.post("/history", function(req, res) {
	db.cahcard.create(req.body).then(function(cahcard) { 
		res.send(true);
	}); 
});

// Delete a history item
app.delete("/history/:id", function(req, res){
	db.cahcard.findById(req.params.id).then(function(cahcard) {
		cahcard.destroy();
		res.send({message:"successfully deleted"});
	});
});


// LISTEN
app.listen(3000); 