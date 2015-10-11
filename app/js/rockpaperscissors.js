
function getInput() {
console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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

function getPlayerMove(move) {
return move || getInput();
}

function getComputerMove(move) {
return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
var winner;
if (playerMove === computerMove) {
    winner = 'tie';
} else if (playerMove === "rock") {
    if (computerMove === "scissors") {
        winner = 'player';
    } else if (computerMove === "paper") {
        winner = 'computer';
    }
} else if (playerMove === "paper") {
    if (computerMove === "rock") {
        winner = 'player';
    } else if (computerMove === "scissors") {
        winner = 'computer';
    }
} else if (playerMove === "scissors") {
    if (computerMove === "paper") {
        winner = 'player';
    } else if (computerMove === "rock") {
        winner = 'computer';
    }
}
return winner;
}

function playToFive() {
console.log('Let\'s play Rock Paper Scissors');
var playerWins = 0;
var computerWins = 0;
while ((playerWins < 5) && (computerWins < 5)) {
  var playerMove = getPlayerMove(getInput());
  var computerMove = getComputerMove(randomPlay());
  var winner = getWinner(playerMove, computerMove);
  if (winner === 'player') {
      playerWins += 1;
      computerWins = computerWins;
      console.log("Player chose " + playerMove + " while Computer chose "  + computerMove);
      console.log("Player wins!");
    console.log("The score is currently " + playerWins + " to " + computerWins + '\n');
  } else if (winner === 'computer') {
      playerWins = playerWins;
      computerWins += 1;
      console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
      console.log("Computer wins...");
  console.log("The score is currently " + playerWins + " to " + computerWins + '\n');
  } else if (winner === 'tie') {
      console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
      console.log("It's a tie! The score is currently " + playerWins + " to " + computerWins + "\n");
  } else {
      break;
  }
  if (playerWins === 5) {
      console.log("Congrats, you have delayed the hostile computer takeover!");
  } else if (computerWins === 5) {
      console.log("Beware, the computers are taking over!");
  }
}


return [playerWins, computerWins];
}
playToFive();
