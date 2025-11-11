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
  return (n % 10) + sumOfDigits(parseInt(n / 10))
}

// console.log(sumOfDigits(54321))

function product(n) {
  if (n % 10 === n) return n
  return (n % 10) * product(parseInt(n / 10))
}

// console.log(product(123))

// it's always passing 5 here
// n-- vs --n
function passingNumber(n) {
  if (n <= 0) return 1
  console.log(n)
  passingNumber(n--)
}

// passingNumber(5)

let sum = 0

function reverseNumber(n) {
  if (n <= 0) return
  sum = sum * 10 + (n % 10)
  console.log(sum)
  reverseNumber(parseInt(n / 10))
}

// reverseNumber(1234)

let count = 0
function countZeroes(n) {
  if (n <= 0) return
  const rem = n % 10
  if (rem === 0) count++
  countZeroes(parseInt(n / 10))
}

// countZeroes(500300)

// console.log(count)

function sorted(arr, index) {
  if (index === arr.length - 1) {
    return true
  }
  // console.log(index)
  return arr[index] < arr[index + 1] && sorted(arr, index + 1)
}

const arr = [1, 2, 3, 4, 4, 4, 5, 6, 4, 7]
// const res = sorted(arr, 0)
// console.log(res)

function linearSearch(arr, target, index) {
  if (index === arr.length - 1) {
    // no need to check further, cuz we are at last index
    return arr[index] === target
  }

  if (arr[index] === target) return true

  return linearSearch(arr, target, index + 1)
}

// const res = linearSearch(arr, 7, 0)
// console.log(res)
//
// const res1 = linearSearch(arr, 90, 0)
// console.log(res1)

function linearSearchWithArr(arr, target, index) {
  let list = []
  if (index === arr.length - 1) {
    if (arr[index] === target) {
      list.push(index)
    }
    return list
  }

  if (arr[index] === target) list.push(index)
  const l = linearSearchWithArr(arr, target, index + 1)

  list = [...list, ...l]
  return list
}

const res = linearSearchWithArr(arr, 4, 0)
console.log(res)

