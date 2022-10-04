/* Keeps the state of the game */
let gameState = {
  currentPlayer: true
}

/* Calls the listeners when DOM content loads */
const main = () => {
  const $cells = document.querySelectorAll(".cell");
  listenCells($cells);
  listenResetBtn($cells);
}

/* Listen to click on cells */
const listenCells = ($cells) => {
  $cells.forEach(cell => {
    cell.addEventListener('click', e => {
      if (e.target.textContent === '') {
        e.target.textContent = gameState.currentPlayer ? 'X' : 'O';
        gameState.currentPlayer = !gameState.currentPlayer;
      }
    });
  });
}

/* Listen to the reset button */
const listenResetBtn = $cells => {
  document.getElementById("resetBtn").addEventListener('click', () => {
    $cells.forEach(cell => { 
      cell.textContent = '';
    });
  });
}

/* Calls main function on load */
document.addEventListener('DOMContentLoaded', main)