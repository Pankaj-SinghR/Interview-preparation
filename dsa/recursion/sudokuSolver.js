/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function (board) {
    const row = 0
    const col = 0
    sudokuSolver(board, row, col);
}

function sudokuSolver(board, row, col) {
    const nextRow = row
    const nextCol = col + 1

    if (nextCol === 9) {
        nextRow = row + 1
        nextCol = 0
    }

    // base case
    if (row === 9) {
        return true
    }

    // skip if the cell is already filled
    if (board[row][col] !== '.') {
        return sudokuSolver(board, nextRow, nextCol)
    }

    for (let num = 1; num <= 9; num++) {
        if (isSafe(board, row, col, num)) {
            board[row][col] = num.toString()
            if (sudokuSolver(board, nextRow, nextCol)) {
                return true
            }
            board[row][col] = '.'
        }
    }

    return false
}

function isSafe(board, row, col, num) {
    // horizontal check 
    // if we found the same number on horizontal row
    for (let j = 0; j < 9; j++) {
        if (board[row][j] === num.toString()) return false
    }

    // vertical check 
    // if we found the same number on vertical col 
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num.toString()) return false
    }

    // maze check 
    let rowStart = row - row % 3
    let colStart = col - col % 3
    for (let i = rowStart; i < rowStart + 3; i++) {
        for (let j = colStart; j < colStart + 3; j++) {
            if (board[i][j] === num.toString()) return false
        }
    }

    return true
}
