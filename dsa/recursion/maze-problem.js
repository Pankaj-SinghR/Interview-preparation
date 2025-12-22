// maze problem

function pathCount(r, c) {
  if (r === 1 || c === 1) {
    return 1
  }
  const left = pathCount(r - 1, c)
  const right = pathCount(r, c - 1)
  return left + right
}

const res = pathCount(2, 3)
console.log(res)

