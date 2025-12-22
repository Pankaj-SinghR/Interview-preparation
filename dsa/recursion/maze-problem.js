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

  if (r === 1 && c > 1) {
    const rr = pathPrint(path + "R", r, c - 1)
    ans = [...ans, ...rr]
  }

  if (c === 1 && r > 1) {
    const cc = pathPrint(path + "D", r - 1, c)
    ans = [...ans, ...cc]
  }

  if (r > 1 && c > 1) {
    const rr = pathPrint(path + "D", r - 1, c)
    ans = [...ans, ...rr]
    const cc = pathPrint(path + "R", r, c - 1)
    ans = [...ans, ...cc]
  }

  return ans
}

const res = pathPrint("", 3, 3)
console.log(res)

