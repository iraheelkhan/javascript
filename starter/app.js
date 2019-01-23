/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0 ;
activePlayer = 1;




// hiding the dice on load of windows
document.querySelector('.dice').style.display = 'none';

//here are the two different ways to handle the event listener.

// the first one is to make it happen is create a separate function for whatever you want to do by that event and pass the name of that function as a parameter to the addEventListener. which is done below. 

/*

function btnClicked(){
	//code goes here for something making to happen. 
}
document.querySelector('.btn-roll').addEventListener('click', btnClicked);

*/
//the other way around to initiate the function within the addeventlistener function like the below one. 

document.querySelector('.btn-roll').addEventListener('click', function(){
	// your code might goes here for the function which is initiated and passed as parameter in addEventListener

	//generating a random number within the limit of 0-5 + 1 (so it should get within the limit of 1+5) and displaying the generated number on the specific id.
	dice = Math.floor(Math.random() * 6) + 1;
	document.querySelector('#current-1').textContent = dice;

	//showing the number dice image on click event.
	imageDOM = document.querySelector('.dice');
	imageDOM.style.display = 'block';

	


});

