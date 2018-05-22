
$(document).ready(function() {

    $("#cookie").click(function() {

    	//Reset on new clicks

    	$("p").hide().delay(200);

    	//Generate and display random fortunes
    	var fortunes = ["Good fortune!", 
    	"You will go on a trip soon.", 
    	"Expect a kind visitor.", 
    	"Look to your inner being for guidance.", 
    	"A friend asks only for your time not your money.",
    					"If you refuse to accept anything but the best, you very often get it.",
    					"Change can hurt, but it leads a path to something better.",
    					"You cannot love life until you live the life you love.",
    					"A dream you have will come true.",
    					"The man or woman you desire feels the same about you.",
    					"You will become great if you believe in yourself.",
    					"Now is the time to try something new.",
    					"Wealth awaits you very soon.",
    					"You will travel to many exotic places in your lifetime."];
		var randomFortune = Math.floor(Math.random() * fortunes.length);
    	$("p").text(fortunes[randomFortune]);

    	//Fade In fortune result

    	$("p").fadeIn(500);

	});     

});