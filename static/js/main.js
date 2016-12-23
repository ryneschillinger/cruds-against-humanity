var black = ""
var white = ""

//Get random black card

function newBlackCard() {
	var randomNumber = Math.floor(Math.random()*2366);
	var blackCard = CARDS.blackCards[randomNumber].text;
	black = blackCard;
	return black;
}

function dealBlackCard() {
	$("#black").html(newBlackCard());
}

// Get random white cards

var numWhiteCards = $('.white-card').length + 1;

function newWhiteCard() {
	var randomNumber = Math.floor(Math.random()*6097);
	var whiteCard = CARDS.whiteCards[randomNumber];
	white = whiteCard;
	return white;
}

function dealWhiteCards() {
	for (var i = 1; i < numWhiteCards; i++) {
		$("#white" + i).html(newWhiteCard());
	}
}

// Initializing game

$(document).ready(function() {
	dealBlackCard();
	dealWhiteCards();
});


// Click "these cards suck," deal new cards

$("#suck").click(function() {
	dealBlackCard();
	dealWhiteCards();
});


// Choose white card & save to history

$('.white-card').on('click', function(e) {
	black = $("#black").text();
	white = $(this).find("h4").text();
	var url = "/history";
	  $.ajax({
	  	url: url,
	  	method: 'POST',
	  	data: {
	  		black: black,
	  		white: white
	  	}
	}).done(function(data) {
		console.log(data);
	    dealBlackCard();
	    dealWhiteCards();
	  });
});


// Delete a history item

$('.delete').on('click', function(e) {

	var url = "/history/" + e.target.parentNode.parentNode.id;

	$.ajax({
	  method: 'DELETE',
	  url: url
	}).done(function(data) {
		$(e.target).parent().parent().remove();
	});
});