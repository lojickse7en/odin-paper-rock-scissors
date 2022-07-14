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
      let prcOptions = ['✋🏾', '✊🏾', '✌🏾'];

      return prcOptions[Math.floor(Math.random() * prcOptions.length)];
    };

    //assigns random computer response to variable
    const computerSelection = computerPlay();

    //compares values from computer and player. Returns appropriate string message
    let playRound = (playerSelection, computerSelection) => {
      addSelectionResult = (playerSelection, computerSelection) => {
        const finalColumn = document.querySelector('.final-column');
        const content = document.createElement('div');
        content.classList.add('result-selection-player');
        content.textContent = playerSelection;

        finalColumn.after(content);

        const content2 = document.createElement('div');
        content2.classList.add('result-selection-computer');
        content2.textContent = computerSelection;

        finalColumn.after(content2);
      };
      function winnerComputer() {
        const div = document.querySelector('.result-selection-computer');
        div.classList.replace(
          'result-selection-computer',
          'result-selection-winner'
        );
      }
      function winnerPlayer() {
        const div = document.querySelector('.result-selection-player');
        div.classList.replace(
          'result-selection-player',
          'result-selection-winner'
        );
      }
      if (playerSelection === '✊🏾' && computerSelection === '✊🏾') {
        return addSelectionResult(playerSelection, computerSelection);
      } else if (playerSelection === '✊🏾' && computerSelection === '✋🏾') {
        return (
          addSelectionResult(playerSelection, computerSelection),
          computerScore++,
          winnerComputer()
        );
      } else if (playerSelection === '✊🏾' && computerSelection === '✌🏾') {
        return (
          addSelectionResult(playerSelection, computerSelection),
          playerScore++,
          winnerPlayer()
        );
      } else if (playerSelection === '✋🏾' && computerSelection === '✊🏾') {
        return (
          addSelectionResult(playerSelection, computerSelection),
          playerScore++,
          winnerPlayer()
        );
      } else if (playerSelection === '✋🏾' && computerSelection === '✋🏾') {
        return addSelectionResult(playerSelection, computerSelection);
      } else if (playerSelection === '✋🏾' && computerSelection === '✌🏾') {
        return (
          addSelectionResult(playerSelection, computerSelection),
          computerScore++,
          winnerComputer()
        );
      } else if (playerSelection === '✌🏾' && computerSelection === '✊🏾') {
        return (
          addSelectionResult(playerSelection, computerSelection),
          computerScore++,
          winnerComputer()
        );
      } else if (playerSelection === '✌🏾' && computerSelection === '✋🏾') {
        return (
          addSelectionResult(playerSelection, computerSelection),
          playerScore++,
          winnerPlayer()
        );
      } else if (playerSelection === '✌🏾' && computerSelection === '✌🏾') {
        return addSelectionResult(playerSelection, computerSelection);
      } else return alert('You can only type, paper, rock or scissors 😕');
    };

    playRound(playerSelection, computerSelection);
    const resultTextC = document.querySelector('.result-score.computer');
    resultTextC.textContent = `${computerScore}`;

    const resultTextP = document.querySelector('.result-score.player');
    resultTextP.textContent = `${playerScore}`;
    // resultText.appendChild(resultText);
    // console.log(`${result},Computer:${computerScore}, Player: ${playerScore}`);
  };

  //After 5 rounds one of the follow alerts below will run
  //   if (computerScore > playerScore) {
  //     alert(`You lose 😵!
  // Computer: ${computerScore}, Player: ${playerScore}`);
  //   } else if (computerScore < playerScore) {
  //     alert(`You win 🎊!
  // Computer: ${computerScore}, Player: ${playerScore}`);
  //   } else if (
  //     computerScore > playerScore &&
  //     playerScore != 0 &&
  //     computerScore != 0
  //   ) {
  //     alert(`Issa tie 🤷🏾‍♂️!
  // Computer: ${computerScore} Player: ${playerScore}`);
  //   }
};

game();

// addSelectionResult = () => {
//   const container = document.querySelector('.results-container');
//   const content = document.createElement('div');
//   content.classList.add('result-selection');
//   content.textContent = '✌🏾';

//   container.appendChild(content);

//   // const container2 = document.querySelector('.results-container');
//   const content2 = document.createElement('div');
//   content2.classList.add('result-selection');
//   content2.textContent = '✋🏾';

//   container.appendChild(content2);
// };

// addSelectionResult();

// function winner() {
//   const div = document.querySelector('.result-selection');
//   div.classList.replace('result-selection', 'result-selection.winner');
// }
// winner();
