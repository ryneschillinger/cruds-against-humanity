console.log("HOLLATCHABOY");

var blackCard = function() {
	var randomNumber = Math.floor(Math.random()*2366);
	var blackCard = CARDS.blackCards[randomNumber].text;
	return blackCard;
}

var whiteCard = function() {
	var randomNumber = Math.floor(Math.random()*6097);
	console.log(randomNumber);
	var whiteCard = CARDS.whiteCards[randomNumber];
	return whiteCard;
}

$("#black-card-text").html(blackCard);
// $("#white-card").html(whiteCard);

