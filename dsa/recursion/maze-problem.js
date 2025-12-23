// maze problem

function pathCount(r, c) {
  if (r === 1 || c === 1) {
    return 1
  }
  const left = pathCount(r - 1, c)
  const right = pathCount(r, c - 1)
  return left + right
}

// const res = pathCount(2, 3)
// console.log(res)

function pathPrint(path, r, c) {
  let ans = []
  if (r === 1 && c === 1) {
    ans.push(path)
    return ans
  }

  if (c > 1) {
    const rr = pathPrint(path + "R", r, c - 1)
    ans = [...ans, ...rr]
  }

  if (r > 1) {
    const cc = pathPrint(path + "D", r - 1, c)
    ans = [...ans, ...cc]
  }

  if (r > 1 && c > 1) { // you cannot move diagonally 
    const dd = pathPrint(path + "T", r - 1, c - 1)
    ans = [...ans, ...dd]
  }

  return ans
}

function pathPrintWithObstacle(path, r, c, maze) {
  let ans = []

  if (r === maze.length - 1 && c === maze[0].length - 1) {
    ans.push(path)
    return ans
  }

  // if it's an obstacle
  if (!maze[r][c]) {
    return []
  }

  if (r < maze.length - 1) {
    const cc = pathPrintWithObstacle(path + "D", r + 1, c, maze)
    ans = [...ans, ...cc]
  }

  if (c < maze[0].length - 1) {
    const rr = pathPrintWithObstacle(path + "R", r, c + 1, maze)
    ans = [...ans, ...rr]
  }

  return ans
}

const maze = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
]

const res = pathPrintWithObstacle("", 0, 0, maze)
console.log(res)

