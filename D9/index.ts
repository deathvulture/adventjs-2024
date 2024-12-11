//https://adventjs.dev/es/challenges/2024/9

type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'
const Directions = {
  'U': [-1, 0],
  'D': [1, 0],
  'L': [0, -1],
  'R': [0, 1]
}

function moveTrain(board: Board, mov: Movement): Result {
  let head = [-1, -1];
  let newPos = [0, 0];
  for (let i = 0; i < board.length; i++) {
    const headIndex = board[i].indexOf('@');
    if (headIndex !== -1) {
      head = [i, headIndex];
      newPos[0] = head[0] + Directions[mov][0];
      newPos[1] = head[1] + Directions[mov][1];

      if (newPos[0] < 0 || newPos[0] >= board.length) {
        return 'crash';
      }

      if (newPos[1] < 0 || newPos[1] >= board[0].length) {
        return 'crash';
      }

      if (board[newPos[0]][newPos[1]] === 'o') {
        return 'crash';
      }

      if (board[newPos[0]][newPos[1]] === '*') {
        return 'eat';
      }
    }
  }
  return 'none';
}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un es