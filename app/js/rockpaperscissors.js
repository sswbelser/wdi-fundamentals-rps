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
function getPlayerMove(move) {
    return move || getInput();
}
function getComputerMove(move) {
    return move || randomPlay();
}
function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === 'rock' && computerMove === 'scissors')
        || (playerMove === 'paper' && computerMove === 'rock')
        || (playerMove === 'scissors' && computerMove === 'paper')) {
        winner = 'Player';
    }
    else if ((playerMove === 'rock' && computerMove === 'paper')
        || (playerMove === 'paper' && computerMove === 'scissors')
        || (playerMove === 'scissors' && computerMove === 'rock')) {
        winner = 'Computer';
    }
    else if (playerMove === computerMove) {
        winner = 'Tie';
    }
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var conclusion = getWinner(getPlayerMove(), getComputerMove());
        if (conclusion === 'Player') {
            playerWins += 1;
        } else if (conclusion === 'Computer') {
            computerWins += 1;
        }
        console.log(conclusion);
        console.log(playerWins,computerWins);
    }
    if (playerWins == 5) {
        console.log('Congrats, you have won five rounds!');
    }
    else if (computerWins == 5) {
        console.log('Computer has won five rounds');
    }
}