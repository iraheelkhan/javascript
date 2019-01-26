/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice;


init();
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

	//generating a random number within the limit of 0-5 + 1 (so it should get within the limit of 1-6) and displaying the generated number on the specific id.
	dice = Math.floor(Math.random() * 6) + 1;

	//checking if the dice is not equals 1 to.
	if(dice !== 1){
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
		//activePlayer = 0;
	} else{
		document.querySelector('#current-' + activePlayer).textContent = 0;
		nextPlayer();
	}

	//showing the number dice image on click event.
	imageDOM = document.querySelector('.dice');
	imageDOM.style.display = 'block';
	imageDOM.src = 'dice-'+ dice + '.png';

});

document.querySelector('.btn-hold').addEventListener('click', function(){

	scores[activePlayer] += roundScore;

	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	if(scores[activePlayer] >= 10){
		document.querySelector('.dice').style.display = 'none';
		document.getElementById('name-' + activePlayer).innerHTML = "WINNER";
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

		//disabling all the buttons except the new game
		document.querySelector('.btn-roll').disabled  = true;
		document.querySelector('.btn-hold').disabled  = true;
		
	}else{
		nextPlayer();

	}
});

document.querySelector('.btn-new').addEventListener('click', init);
function nextPlayer(){
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

		roundScore = 0;
		
		
		document.getElementById('player-0').classList.toggle('active');
		document.getElementById('player-1').classList.toggle('active');
		// document.getElementById('player-0').classList.remove('active');
		// document.getElementById('player-1').classList.add('active');
		document.querySelector('.dice').style.display = 'none';
}

function init(){
	scores = [0,0];
	roundScore = 0 ;
	activePlayer = 0;

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	
	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	// hiding the dice on load of windows
	document.querySelector('.dice').style.display = 'none';

	document.querySelector('.btn-roll').disabled  = false;
		document.querySelector('.btn-hold').disabled  = false;
}

