// for (let i=1; i<=3; i++) {
//     const prcOptions = ['paper', 'rock', 'scissors']
//     const playerSelection = (prompt('Paper, Rock or Scissors?')).toLowerCase();
//     const computerSelection = prcOptions[Math.floor(Math.random() * prcOptions.length)];
// }
//     let playRound = (playerSelection, computerSelection) => {

//         if (playerSelection === 'rock' && computerSelection === 'rock' ) {
//             return result = 'Its a tie'
//         } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//             return result = 'You lose😭! Paper beats rock'
//         } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//             return result = 'You win! Rock beats scissors'
//         } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//             return result = 'You win! Paper beats rock'
//         } else if (playerSelection === 'paper' && computerSelection === 'paper') {
//             return result = 'Its a tie'
//         } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//             return result = 'You lose😭! Scissors beats paper'
//         } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//             return result = 'You lose😭! Rock beats scissors'
//         } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//             return result = 'You win! Scissors beats paper'
//         } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//             return result = 'Its a tie'
//         } else return alert('You can only type, paper, rock or scissors 😕')
        
//     }
  
    




// let game = () => {
    
//     let playerScore = 0; 
//     let computerScore = 0;

//      if (playRound() == ('You win! Scissors beats paper)' || ('You win! Paper beats rock') || ('You win! Rock beats scissors'))) {
//        return console.log(playerScore++);
//     }
//     else if (playRound() == 'You lose😭! Rock beats scissors' || 'You lose😭! Scissors beats paper' || 'You lose😭! Paper beats rock') {
//         return console.log(computerScore++);
//     }
   
// }

// console.log(game());
// console.log(playerScore, computerScore);

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




















// let game = () => {
//     //we want the user to be prompted with an option to enter RPS. The results of the selection will record a score. 
//     let playerScore = 0; 
//     let computerScore = 0;

//     for (let i=1; i<=3; i++) {
//         const playerSelection = prompt('Paper, Rock or Scissors?');
//         const computerSelection = computerPlay();
//         roundResult = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());

//         console.log(roundResult);
//     } if (roundResult == 'You win! Scissors beats paper' || 'You win! Paper beats rock' || 'You win! Rock beats scissors') {
//         score++;
//     }
//     else if (roundResult == 'You lose😭! Rock beats scissors' || 'You lose😭! Scissors beats paper' || 'You lose😭! Paper beats rock') {
//         score--;
//     }
//     else {
//         score = score;
//     }
//         return console.log(score);
    
// }



// console.log(game());