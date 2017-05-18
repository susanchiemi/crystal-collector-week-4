//computer picks random number between 19 and 120
var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
$("#random-number").text(randomNumber);

//console.log(randomNumber);

var generatedNumber = []
var total = 0;
var wins = 0;
var losses = 0;


//4 crystals have a random hidden value between 1 -12
function fourRandomNumbers(){
    for(var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 11 + 1);
        generatedNumber.push(num);
    }
//console.log(generatedNumber)
}

fourRandomNumbers();

//resets the game
function reset(){
        randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19)
        console.log(randomNumber)
        $("#random-number").text(randomNumber);
        generatedNumber = [];
        fourRandomNumbers();
        total= 0;
        $("#total-so-far").text(total);

    }
    //wins and losses - counter
    //adds the wins to the total
function woohoo(){
		alert("Winner");
	    wins++;
		$("#wins").text(wins);
		reset();
}

//adds the losses to the total
function loser(){
		alert("Game Over");
	    losses++;
		$("#losses").text(losses);
		reset();
}


//sets up click for jewels
//as player clicks on crystal, generatedNumber adds together to get sum of randomNumber
		$("#one").on ("click", function(){
			total = total + generatedNumber[0];
			console.log("New total= " + total);
			$("#total-so-far").text(total);

            	//sets win/lose conditions
					if (total == randomNumber){
						woohoo();
					}
					else if ( total > randomNumber){
						loser();
					}

			  })			

		$("#two").on ("click", function(){
			total = total + generatedNumber[1];
			console.log("New total= " + total);
			$("#total-so-far").text(total);

            if (total == randomNumber){
						woohoo();
					}
					else if ( total > randomNumber){
						loser();
					}

			  })		

		$("#three").on ("click", function(){
			total = total + generatedNumber[2];
			console.log("New total= " + total);
			$("#total-so-far").text(total);

            if (total == randomNumber){
						woohoo();
					}
					else if ( total > randomNumber){
						loser();
					}

	  })	

		$("#four").on ("click", function(){
			total = total + generatedNumber[3];
			console.log("New total= " + total);
			$("#total-so-far").text(total);

            if (total == randomNumber){
						woohoo();
					}
					else if ( total > randomNumber){
						loser();
					}


        });			


