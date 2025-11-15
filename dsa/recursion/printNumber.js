function printNumber(n) {
  if (n === 0) return
  console.log(n)
  return printNumber(n - 1)
}

printNumber(5)

