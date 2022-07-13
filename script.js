// keep score based on computerSelection and playerSelection
let game = () => {
  let playerScore = 0;
  let computerScore = 0;

  // for (let i = 1; i <= 5; i++) {
  //   const playerSelection = prompt(
  //     'You vs. the Computer (best of 5): choose Paper, Rock or Scissors'
  //   ).toLowerCase();
  //This will replace the player input of paper,rock or scissors. Instead of inputting the value through prompt, it should just have the options on the UI and return the corresponding value
  let buttonSelections = document.querySelectorAll('.btn');
  //create an event listener so that when any of the buttons are clicked, it runs the playerSelection variable (from above). The result should be used in the playRound function.
  buttonSelections.forEach((buttonSelection) => {
    buttonSelection.addEventListener('click', (e) => {
      const selectionName = buttonSelection.textContent.toLowerCase();
      makeSelection(selectionName);
    });
  });
  makeSelection = (selection) => {
    const playerSelection = selection;

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
    // const resultText = document.getElementById('#results');
    // resultText.textContent = 'hey';
    // results.appendChild(resultText);
    console.log(`${result},Computer:${computerScore}, Player: ${playerScore}`);
  };

  if (computerScore > playerScore) {
    alert(`You lose 😵! 
Computer: ${computerScore}, Player: ${playerScore}`);
  } else if (computerScore < playerScore) {
    alert(`You win 🎊! 
Computer: ${computerScore}, Player: ${playerScore}`);
  } else if (
    computerScore > playerScore &&
    playerScore != 0 &&
    computerScore != 0
  ) {
    alert(`Issa tie 🤷🏾‍♂️! 
Computer: ${computerScore} Player: ${playerScore}`);
  }
};

game();
