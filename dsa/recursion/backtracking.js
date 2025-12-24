function backtracking(path, r, c, maze) {
  let ans = []

  if (r === maze.length - 1 && c === maze[0].length - 1) {
    ans.push(path)
    return ans
  }

  // if it's an obstacle
  if (!maze[r][c]) {
    return []
  }
  maze[r][c] = false

  if (r < maze.length - 1) {
    const cc = backtracking(path + "D", r + 1, c, maze)
    ans = [...ans, ...cc]
  }

  if (c < maze[0].length - 1) {
    const rr = backtracking(path + "R", r, c + 1, maze)
    ans = [...ans, ...rr]
  }

  if (r > 0) {
    const rr = backtracking(path + "U", r - 1, c, maze)
    ans = [...ans, ...rr]
  }

  if (c > 0) {
    const rr = backtracking(path + "L", r, c - 1, maze)
    ans = [...ans, ...rr]
  }

  maze[r][c] = true

  return ans
}

const maze = [
  [true, true, true],
  [true, true, true],
  [true, true, true]
]

const res = backtracking("", 0, 0, maze)
console.log(res)

