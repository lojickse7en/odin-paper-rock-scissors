// keep score based on computerSelection and playerSelection??
let game = () => {
  let playerScore = 0;
  let computerScore = 0;
  //loops through the code block
  for (let i = 1; i <= 5; i++) {
    //prompts the player to enter a response (paper, roc or scissors)
    const playerSelection = prompt(
      'You vs. the Computer (best of 5): choose Paper, Rock or Scissors'
    ).toLowerCase();
    //function that generates a random (paper, rock or scissors) response for the computer. Returns the value
    let computerPlay = () => {
      let prcOptions = ['paper', 'rock', 'scissors'];

      return prcOptions[Math.floor(Math.random() * prcOptions.length)];
    };

    //assigns random computer response to variable
    const computerSelection = computerPlay();

    //compares values from computer and player. Returns appropriate string message
    let playRound = (playerSelection, computerSelection) => {
      if (playerSelection === 'rock' && computerSelection === 'rock') {
        return (
          (result = 'Its a tie'),
          alert(`${result}
Computer: ${computerScore}, Player: ${playerScore}`)
        );
      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return (
          (result = 'You lose😭! Paper beats rock'),
          computerScore++,
          alert(`${result}
Computer: ${computerScore}, Player: ${playerScore}`)
        );
      } else if (
        playerSelection === 'rock' &&
        computerSelection === 'scissors'
      ) {
        return (
          (result = 'You win😎! Rock beats scissors'),
          playerScore++,
          alert(`${result}
Computer: ${computerScore}, Player: ${playerScore}`)
        );
      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return (
          (result = 'You win😎! Paper beats rock'),
          playerScore++,
          alert(`${result},
Computer: ${computerScore}, Player: ${playerScore}`)
        );
      } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return (
          (result = 'Its a tie'),
          alert(`${result}
Computer: ${computerScore}, Player: ${playerScore}`)
        );
      } else if (
        playerSelection === 'paper' &&
        computerSelection === 'scissors'
      ) {
        return (
          (result = 'You lose😭! Scissors beats paper'),
          computerScore++,
          alert(`${result}
Computer: ${computerScore}, Player: ${playerScore}`)
        );
      } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'rock'
      ) {
        return (
          (result = 'You lose😭! Rock beats scissors'),
          computerScore++,
          alert(`${result}
Computer: ${computerScore}, Player: ${playerScore}`)
        );
      } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'paper'
      ) {
        return (
          (result = 'You win😎! Scissors beats paper'),
          playerScore++,
          alert(`${result}
Computer: ${computerScore}, Player: ${playerScore}`)
        );
      } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'scissors'
      ) {
        return (
          (result = 'Its a tie'),
          alert(`${result}
Computer: ${computerScore}, Player: ${playerScore}`)
        );
      } else return alert('You can only type, paper, rock or scissors 😕');
    };

    roundResult = playRound(playerSelection, computerSelection);
    console.log(`${result},Computer:${computerScore}, Player: ${playerScore}`);
  }

  if (computerScore > playerScore) {
    alert(`You lose 😵! 
Computer: ${computerScore}, Player: ${playerScore}`);
  } else if (computerScore < playerScore) {
    alert(`You win 🎊! 
Computer: ${computerScore}, Player: ${playerScore}`);
  } else
    alert(`Issa tie 🤷🏾‍♂️! 
Computer: ${computerScore} Player: ${playerScore}`);
};

game();
