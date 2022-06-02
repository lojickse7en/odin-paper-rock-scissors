//loops through the code block 'i' times
for (let i=1; i<=3; i++) {
//function that generates a random (paper, rock or scissors) response for the computer. Returns the value
    let computerPlay = () => {
    let prcOptions = ['paper', 'rock', 'scissors']
  
    return prcOptions[Math.floor(Math.random() * prcOptions.length)];
}
//prompts the player to enter a response (paper, roc or scissors)
const playerSelection = prompt('Paper, Rock or Scissors?');
//assigns random computer value to variable
const computerSelection = computerPlay();

//compares values from computer and player. Returns appropriate string message
let playRound = (playerSelection, computerSelection) => {

    if (playerSelection === 'rock' && computerSelection === 'rock' ) {
        return result = 'Its a tie'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return result = 'You lose😭! Paper beats rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return result = 'You win! Rock beats scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return result = 'You win! Paper beats rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return result = 'Its a tie'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return result = 'You lose😭! Scissors beats paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return result = 'You lose😭! Rock beats scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return result = 'You win! Scissors beats paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return result = 'Its a tie'
    } else return alert('You can only type, paper, rock or scissors 😕')
    
    
}



roundResult = playRound(playerSelection.toLowerCase(), computerSelection);


let playerScore = 0; 
let computerScore = 0;


let gameScore = (roundResult) => {
    
    
            if (roundResult == 'You win! Scissors beats paper' || 'You win! Paper beats rock' || 'You win! Rock beats scissors') {
               return playerScore++;
            }
            else if (roundResult == 'You lose😭! Rock beats scissors' || 'You lose😭! Scissors beats paper' || 'You lose😭! Paper beats rock') {
               return computerScore++;
            }       
            
}


gameScore()
console.log(computerScore, playerScore)
}