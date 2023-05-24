// Example usage:
//   const board = [
//     ['X', 'O', ''],
//     ['', 'O', ''],
//     ['', '', 'X']
//   ];
//   const player = 'X';
  
//   const result = minimax(board, player);
//   console.log('Best move:', result.move);
//   console.log('Board score:', result.score);
export default function minimax(board, player) {
    const currentPlayer = player === 'X' ? 'X' : 'O';
    const opponent = player === 'X' ? 'O' : 'X';
  
    if (isGameOver(board)) {
      const score = evaluate(board, player);
      return { score };
    }
  
    const moves = [];
    const scores = [];
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          const newBoard = [...board.map(row => [...row])];
          newBoard[i][j] = currentPlayer;
  
          const move = { row: i, col: j };
          const result = minimax(newBoard, opponent);
  
          scores.push(result.score);
          moves.push({ move, score: result.score });
        }
      }
    }
  
    let bestMove;
    if (player === currentPlayer) {
      const maxScore = Math.max(...scores);
      const bestMoves = moves.filter(move => move.score === maxScore);
      bestMove = bestMoves[Math.floor(Math.random() * bestMoves.length)].move;
    } else {
      const minScore = Math.min(...scores);
      const bestMoves = moves.filter(move => move.score === minScore);
      bestMove = bestMoves[Math.floor(Math.random() * bestMoves.length)].move;
    }
  
    return { move: bestMove, score: player === currentPlayer ? Math.max(...scores) : Math.min(...scores) };
  }
  
  function isGameOver(board) {
    // Check for a win
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return true;
      }
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return true;
      }
    }
  
    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return true;
    }
  
    // Check for a draw
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }
  
  function evaluate(board, player) {
    const opponent = player === 'X' ? 'O' : 'X';
  
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return 10;
      }
      if (board[i][0] === opponent && board[i][1] === opponent && board[i][2] === opponent) {
        return -10;
      }
    }
  
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
        return 10;
      }
      if (board[0][i] === opponent && board[1][i] === opponent && board[2][i] === opponent) {
        return -10;
      }
    }
  
    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      return 10;
    }
    if (board[0][0] === opponent && board[1][1] === opponent && board[2][2] === opponent) {
      return -10;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      return 10;
    }
    if (board[0][2] === opponent && board[1][1] === opponent && board[2][0] === opponent) {
      return -10;
    }
  
    return 0; // No winner
  }
  
  