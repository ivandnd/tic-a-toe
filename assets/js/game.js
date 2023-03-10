/* Default Player Turns
0 = disable
1 = enable
*/

let player_x = 1;
let player_o = 0;

let moveCounter = 0;

let player_x_score = 0;
let player_ties_score = 0;
let player_o_score = 0;

// Queries

let buttons = document.querySelectorAll(".btns");
let boxes = document.querySelectorAll(".box");
let results = document.querySelector("#results");

let playerXScore = document.querySelector("#player_x_score");
let playerTiesScore = document.querySelector("#player_ties_score");
let playerOScore = document.querySelector("#player_o_score");

function playerTurns(move) {
  if (player_x == 1 && player_o == 0) {
    // Player X always goes first
    move.textContent = "X";
    move.classList.add("disabled");
    moveCounter++;
    player_x = 0; // Disables player x move
    player_o = 1; // Enables player o move
  } else {
    // Player O always second
    move.textContent = "O";
    move.classList.add("disabled");
    moveCounter++;
    player_x = 1; // Enables player x move
    player_o = 0; // Disables player o move
  }
}

boxes.forEach((box) =>
  box.addEventListener("click", (move) => {
    playerTurns(move.target);

    if (a1.textContent == "X" && a2.textContent == "X" && a3.textContent == "X") {
      winnerPlayerX();
      disableBoxes();
    } else if (b1.textContent == "X" && b2.textContent == "X" && b3.textContent == "X") {
      winnerPlayerX();
      disableBoxes();
    } else if (c1.textContent == "X" && c2.textContent == "X" && c3.textContent == "X") {
      winnerPlayerX();
      disableBoxes();
    } else if (a1.textContent == "X" && b1.textContent == "X" && c1.textContent == "X") {
      winnerPlayerX();
      disableBoxes();
    } else if (a2.textContent == "X" && b2.textContent == "X" && c2.textContent == "X") {
      winnerPlayerX();
      disableBoxes();
    } else if (a3.textContent == "X" && b3.textContent == "X" && c3.textContent == "X") {
      winnerPlayerX();
      disableBoxes();
    } else if (a1.textContent == "X" && b2.textContent == "X" && c3.textContent == "X") {
      winnerPlayerX();
      disableBoxes();
    } else if (a3.textContent == "X" && b2.textContent == "X" && c1.textContent == "X") {
      winnerPlayerX();
      disableBoxes();
    } else if (a1.textContent == "O" && a2.textContent == "O" && a3.textContent == "O") {
      winnerPlayerO();
      disableBoxes();
    } else if (b1.textContent == "O" && b2.textContent == "O" && b3.textContent == "O") {
      winnerPlayerO();
      disableBoxes();
    } else if (c1.textContent == "O" && c2.textContent == "O" && c3.textContent == "O") {
      winnerPlayerO();
      disableBoxes();
    } else if (a1.textContent == "O" && b1.textContent == "O" && c1.textContent == "O") {
      winnerPlayerO();
      disableBoxes();
    } else if (a2.textContent == "O" && b2.textContent == "O" && c2.textContent == "O") {
      winnerPlayerO();
      disableBoxes();
    } else if (a3.textContent == "O" && b3.textContent == "O" && c3.textContent == "O") {
      winnerPlayerO();
      disableBoxes();
    } else if (a1.textContent == "O" && b2.textContent == "O" && c3.textContent == "O") {
      winnerPlayerO();
      disableBoxes();
    } else if (a3.textContent == "O" && b2.textContent == "O" && c1.textContent == "O") {
      winnerPlayerO();
      disableBoxes();
    } else if (moveCounter === boxes.length) {
      winnerNone();
      disableBoxes();
    }
  })
);

function winnerPlayerX() {
  player_x_score++;
  playerXScore.textContent = `Player X Score: ${player_x_score}`;
  results.textContent = "Player X Won!";
}

function winnerPlayerO() {
  player_o_score++;
  playerOScore.textContent = `Player O Score: ${player_o_score}`;
  results.textContent = "Player O Won!";
}

function winnerNone() {
  player_ties_score++;
  playerTiesScore.textContent = `Ties: ${player_ties_score}`;
  results.textContent = "It's a tie!";
}

function restartGame() {
  player_x_score = 0;
  player_ties_score = 0;
  player_o_score = 0;
  moveCounter = 0;
  playerXScore.textContent = `Player X Score: ${player_x_score}`;
  playerTiesScore.textContent = `Ties: ${player_ties_score}`;
  playerOScore.textContent = `Player O Score: ${player_o_score}`;
  player_x = 1;
  player_o = 0;
  enableBoxes();
  clearBoxes();
}

function continuePlaying() {
  player_x = 1;
  player_o = 0;
  moveCounter = 0;
  enableBoxes();
  clearBoxes();
}

function disableBoxes() {
  for (let listOfNodes = 0; listOfNodes < boxes.length; listOfNodes++) {
    boxes[listOfNodes].classList.add("disabled");
  }

  for (let btns = 0; btns < buttons.length; btns++) {
    buttons[btns].classList.remove("not-visible");
    buttons[btns].classList.add("visible");
  }
}

function enableBoxes() {
  for (let listOfNodes = 0; listOfNodes < boxes.length; listOfNodes++) {
    boxes[listOfNodes].classList.remove("disabled");
  }

  for (let btns = 0; btns < buttons.length; btns++) {
    buttons[btns].classList.add("not-visible");
    buttons[btns].classList.remove("visible");
  }
}

function clearBoxes() {
  for (let listOfNodes = 0; listOfNodes < boxes.length; listOfNodes++) {
    boxes[listOfNodes].textContent = "";
  }
  results.textContent = "";
}
