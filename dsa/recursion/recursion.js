// function printNumber(n) {
//   if (n === 0) return
//   printNumber(n - 1)
//   console.log(n)
// }
//
// printNumber(5)

// factorial of a number
function factorialNumber(n) {
  if (n <= 1) return 1
  return n * factorialNumber(n - 1)
}

// const res = factorialNumber(5)
// console.log(res)

// sum of digits
function sumOfDigits(n) {
  if (n <= 0) return 0
  const rem = n % 10
  const num = parseInt(n / 10)
  return rem + sumOfDigits(num)
}

console.log(sumOfDigits(54321))

