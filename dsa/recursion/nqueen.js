function nQueen(board, row, n) {
  let ans = []

  if (row === n) {
    // display(board, n)
    ans.push(board.map(r => [...r]));
    return ans
  }

  for (let j = 0; j < n; j++) {
    if (isSafe(board, row, j, n)) {
      board[row][j] = "Q"
      ans.push(...nQueen(board, row + 1, n))
      board[row][j] = "."
    }
  }

  return ans
}

function display(board, n) {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n; j++) {
      row += board[i][j] + " "
    }
    console.log(row)
  }
  console.log("----------------------")
}

function isSafe(board, row, col, n) {
  // console.log(board[0]);
  // horizontal check 
  for (let j = 0; j < n; j++) {
    if (board[row][j] === "Q") return false
  }

  // vertical check
  for (let i = 0; i < n; i++) {
    if (board[i][col] === "Q") return false
  }

  // diagonal check 
  // left diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false
  }

  // right diagonal
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") return false
  }
  return true
}

function createBoard(n) {
  let board = []
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      row.push(".")
    }
    board.push(row)
  }
  return board
}

const row = 0
const n = 4

const res = nQueen(createBoard(n), row, n)
console.log(res);
