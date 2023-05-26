// given 2d 3x3 array of values X, O or empty string, return 2d array of board state with best value that player to move can make using minimax algorithm
//ex input board = [
//   ['X', 'O', ''],
//   ['', 'O', ''],
//   ['', '', 'X']];
// playerToMove = 'X'
// ex output board = [
//   ['X', 'O', ''],
//   ['', 'O', ''],
// ['','X','X']];

//another example
//ex input board = [
//   ['X', 'O', ''],
//   ['', '', ''],
//   ['O', '', 'X']];
// playerToMove = 'X'
// ex output board = [
//   ['X', 'O', ''],
//   ['', 'X', ''],
// ['O','','X']];
// if one of the players has won, return null
// if no more moves can be made, return null

const checkGameResult = (board) => {
    // check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
            return board[i][0];
        }
    }
    // check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
            return board[0][i];
        }
    }
    // check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
        return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
        return board[0][2];
    }
    // check if game is a draw
    let isDraw = true;
    for (let i = 0; i < 3; i++) {
        if (board[i].includes('')) {
            isDraw = false;
        }
    }
    if (isDraw) {
        return 'draw';
    }
    // if game is not over, return null
    return null;
}

// given a board, return an array of all possible moves
const getAllPossibleMoves = (board, playerToMove) => {
    const possibleMoves = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // if cell is empty, add it to possible moves
            if (board[i][j] === '') {
                possibleMoves.push([i, j]);
            }
        }
    }
    return possibleMoves; 
}

// given a board, a move, and a player, return a new board with the move made
const makeMove = (board, move, player) => {
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[move[0]][move[1]] = player;
    return newBoard;
}



export default function minimax(board, playerToMove) {
    // check if game is over
    const gameResult = checkGameResult(board);
    if (gameResult === 'X') {
        return { move: null, score: 10 };
    } else if (gameResult === 'O') {
        return { move: null, score: -10 };
    } else if (gameResult === 'draw') {
        return { move: null, score: 0 };
    }
    // if game is not over, continue with minimax algorithm
    // get all possible moves
    const possibleMoves = getAllPossibleMoves(board, playerToMove);
    // for each possible move, call minimax recursively
    const scores = [];
    const moves = [];
    for (let i = 0; i < possibleMoves.length; i++) {
        const move = possibleMoves[i];
        const newBoard = makeMove(board, move, playerToMove);
        const result = minimax(newBoard, playerToMove === 'X' ? 'O' : 'X');
        scores.push(result.score);
        moves.push(move);
    }
    // if playerToMove is X, return the move with the highest score
    if (playerToMove === 'X') {
        const maxScore = Math.max(...scores);
        const maxScoreIndex = scores.indexOf(maxScore);
        return { move: moves[maxScoreIndex], score: maxScore };
    } else {
        // if playerToMove is O, return the move with the lowest score
        const minScore = Math.min(...scores);
        const minScoreIndex = scores.indexOf(minScore);
        return { move: moves[minScoreIndex], score: minScore };
    }
}
