document.addEventListener('DOMContentLoaded', function () {
    const boardSize = 8;
    const numMines = 15;
    const startCell = { x: 0, y: 0 };
    const finishCell = { x: boardSize - 1, y: boardSize - 1 };
    let playerPosition;
    let mines = [];
    let gameStarted = false;

    function createBoard() {
        const boardElement = document.getElementById('board');
        boardElement.innerHTML = '';

        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x = j;
                cell.dataset.y = i;
                boardElement.appendChild(cell);

                if (j === startCell.x && i === startCell.y) {
                    cell.classList.add('start');
                    cell.style.backgroundColor = 'green'; 
                }
                if (j === finishCell.x && i === finishCell.y) {
                    cell.classList.add('finish');
                    cell.style.backgroundColor = 'red'; 
                }
            }
        }
    }

    function placeMines() {
        for (let i = 0; i < numMines; i++) {
            let x, y;
            while (!x || (x === startCell.x && y === startCell.y)) {
                x = Math.floor(Math.random() * boardSize);
                y = Math.floor(Math.random() * boardSize);
            }
            mines.push({ x, y });
        }
    }

    function updateBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            const x = parseInt(cell.dataset.x);
            const y = parseInt(cell.dataset.y);
            const isMine = mines.some(mine => mine.x === x && mine.y === y);
            cell.classList.toggle('mine', isMine);
            cell.classList.toggle('player', playerPosition && playerPosition.x === x && playerPosition.y === y);
        });
    }

    function movePlayer(event) {
        if (!gameStarted) return;
        const target = event.target;
        if (!target.classList.contains('cell')) return;

        const x = parseInt(target.dataset.x);
        const y = parseInt(target.dataset.y);
        const isValidMove = Math.abs(playerPosition.x - x) <= 1 && Math.abs(playerPosition.y - y) <= 1;
        if (isValidMove) {
            playerPosition = { x, y };
            updateBoard();
            checkGameStatus();
        }
    }

    function checkGameStatus() {
        const isMine = mines.some(mine => mine.x === playerPosition.x && mine.y === playerPosition.y);
        if (isMine) {
            const cell = document.querySelector(`.cell[data-x="${playerPosition.x}"][data-y="${playerPosition.y}"]`);
            cell.textContent = 'X';
            cell.classList.add('red-x');
            showMessage('Game over! You hit a mine. RIP buddy');
            gameStarted = false;
        } else if (playerPosition.x === finishCell.x && playerPosition.y === finishCell.y) {
            showMessage('OMG you survived! You reached the end!');
            gameStarted = false;
        }
    }

    function showMessage(message) {
        document.getElementById('message').textContent = message;
    }

    function startGame() {
        if (!gameStarted) {
            createBoard();
            placeMines();
            gameStarted = true;
            playerPosition = { ...startCell };
            showMessage('Good luck and godspeed');
            updateBoard();
        }
    }

    function resetGame() {
        gameStarted = false;
        playerPosition = null;
        mines = [];
        createBoard(); 

        const startCellElement = document.querySelector(`.cell[data-x="${startCell.x}"][data-y="${startCell.y}"]`);
        startCellElement.classList.add('start');
        startCellElement.style.backgroundColor = 'green'; 

        const finishCellElement = document.querySelector(`.cell[data-x="${finishCell.x}"][data-y="${finishCell.y}"]`);
        finishCellElement.classList.add('finish');
        finishCellElement.style.backgroundColor = 'red'; 
        
        showMessage('Starting line on the green, finishing line is the red. You need to get to that finishing line one step at a time!');
        updateBoard();
    }

    document.getElementById('board').addEventListener('click', movePlayer);
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('resetBtn').addEventListener('click', resetGame);

    resetGame();
});