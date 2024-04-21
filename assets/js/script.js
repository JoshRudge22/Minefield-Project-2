document.addEventListener('DOMContentLoaded', function() {
    const boardSize = 8;
    const numMines = 20;
    const startCell = { x: 0, y: 0 };
    const finishCell = { x: boardSize - 1, y: boardSize - 1 };
    let playerPosition;
    let mines = [];
    let gameStarted = false;

    function createBoard() {
        const boardElement = document.getElementById('board');
        boardElement.innerHTML = '';

        let startFound = false;
        let finishFound = false;

        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x = j;
                cell.dataset.y = i;
                boardElement.appendChild(cell);

                if (j === startCell.x && i === startCell.y) {
                    cell.classList.add('start');
                    startFound = true;
                }
                if (j === finishCell.x && i === finishCell.y) {
                    cell.classList.add('finish');
                    finishFound = true;
                }
            }
        }
    }