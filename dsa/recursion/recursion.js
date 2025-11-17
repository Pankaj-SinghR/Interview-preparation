// function printNumber(n) {
//   if (n === 0) return
//   printNumber(n - 1)
//   console.log(n)
// }
//
// printNumber(5)

// 5*4*
function factorialNumber(n) {
  if (n === 1) return 1
  return n * factorialNumber(n - 1)
}

const res = factorialNumber(5)
console.log(res)

