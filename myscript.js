const gameboard = [];

// Initialize a 3x3 board
for (let i = 0; i < 3; i++) {
    gameboard[i] = [null, null, null];
}

function printBoard() {
    console.log('\nCurrent board:');
    for (let row of gameboard) {
        console.log(row.map(cell => cell || '-').join(' '));
    }
}

function makeMove(row, col, player) {
    if (gameboard[row][col] === null) {
        gameboard[row][col] = player;
        return true;
    }
    return false;
}

function checkWin(player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (gameboard[i][0] === player && gameboard[i][1] === player && gameboard[i][2] === player) {
            return true;
        }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (gameboard[0][j] === player && gameboard[1][j] === player && gameboard[2][j] === player) {
            return true;
        }
    }
    // Check diagonals
    if (gameboard[0][0] === player && gameboard[1][1] === player && gameboard[2][2] === player) {
        return true;
    }
    if (gameboard[0][2] === player && gameboard[1][1] === player && gameboard[2][0] === player) {
        return true;
    }
    return false;
}

function checkTie() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameboard[i][j] === null) {
                return false;
            }
        }
    }
    return true;
}

const moves = [
    [0, 0, 'O'],
    [0, 1, 'x'],
    [1, 1, 'O'],
    [0, 2, 'X'],
    [2, 0, 'O'] 
];

let winner = null;
for (let [row, col, player] of moves) {
    makeMove(row, col, player);
    printBoard();
    if (checkWin(player)) {
        console.log(`Player ${player} wins!`);
        winner = player;
        break;
    }
    if (checkTie()) {
        console.log('It\'s a tie!');
        break;
    }
}
if (!winner && !checkTie()) {
    console.log('Game is still ongoing.');
}
