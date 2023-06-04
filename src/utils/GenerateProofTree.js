// this function will generate a proof tree for the given board state
// it repeatedly calls minimax on the board state to generate the next move
// the output of this function is a data structure that contains root value the initial board state and children that are the next board states
// example

import minimax from "./minimax"

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
    console.log("move", move);
    console.log("newBoard", newBoard);
    newBoard[move[0]][move[1]] = player;
    return newBoard;
}


export default function GenerateProofTree(boardState, playerToMove, player) {
    var graphData = {
        // convert boardstate to a string and use that as name
        name: boardState.toString(),
        values: boardState,
    }

    // if game is over, return null
    const result = minimax(boardState, playerToMove);   
    console.log("result", result);
    if (result.move === null) {
        return graphData;
    }

    // if game is not over, generate proof tree
    // if playerToMove is the player, then make result.move and add it to the graphData
    if (playerToMove === player) {
        console.log(result.move);
        const newBoard = makeMove(boardState, result.move, playerToMove);
        graphData.children = [GenerateProofTree(newBoard, playerToMove === 'X' ? 'O' : 'X', player)];
    } else {
        // if playerToMove is not the player, then generate all possible moves and add them to the graphData, call GenerateProofTree on each of them
        const possibleMoves = getAllPossibleMoves(boardState, playerToMove);
        graphData.children = [];
        for (let i = 0; i < possibleMoves.length; i++) {
            const move = possibleMoves[i];
            const newBoard = makeMove(boardState, move, playerToMove);
            graphData.children.push(GenerateProofTree(newBoard, playerToMove === 'X' ? 'O' : 'X', player));
        }
    }
    return graphData;
}