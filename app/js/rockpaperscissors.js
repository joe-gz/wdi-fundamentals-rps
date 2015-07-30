////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput();
    return move;
}



function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    return move;
}




function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if (playerMove === 'paper' && computerMove === 'rock') {
        winner = "player";
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = "player";
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = "player";
    } else if (playerMove === computerMove) {
        winner = "Tie";
    } else {
        winner = "computer";
    }
    if( playerMove === computerMove) {
       console.log("You chose " + playerMove + " and your opponent chose " + computerMove + " so it's a Tie"); 
    } else {
    console.log("You chose " + playerMove + " and your opponent chose " + computerMove + " so the winner is " + winner);
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var result;
    while (playerWins < 5 && computerWins < 5) {
        result = getWinner(getPlayerMove(),getComputerMove());
        if (result === "player") {
            //console.log("You chose " + playerMove + " and your opponent chose " + computerMove + " so the winner is ");
            //console.log (result);
            playerWins += 1;
        } else if (result === "computer") {
            //console.log("You chose " + playerMove + " and your opponent chose " + computerMove + " so the winner is ");
            //console.log (result);
            computerWins +=1;
        } else if (result === "Tie") {
            //console.log("You chose " + playerMove + " and your opponent chose " + computerMove + " so the winner is ");
            //console.log (result);
            playerWins += 0;
            computerWins += 0;
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    }
    console.log('Final score:')
    return [playerWins, computerWins];
}
playToFive();

//done

