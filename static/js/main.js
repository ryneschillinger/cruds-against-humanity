console.log("HOLLATCHABOY");

//Get random black card

function newBlackCard() {
	var randomNumber = Math.floor(Math.random()*2366);
	var blackCard = CARDS.blackCards[randomNumber].text;
	return blackCard;
}

function dealBlackCard() {
	$("#black-card-text").html(newBlackCard());
}

// Get random white cards

var numWhiteCards = $('.white-card').length + 1;

function newWhiteCard() {
	var randomNumber = Math.floor(Math.random()*6097);
	var whiteCard = CARDS.whiteCards[randomNumber];
	return whiteCard;
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