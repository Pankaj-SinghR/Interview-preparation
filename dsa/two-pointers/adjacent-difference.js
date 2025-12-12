/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  // sort the array
  const res = []
  arr.sort((a, b) => a - b)

  let miniAbsolute = Infinity
  // get the minimum adsolute difference
  for (let i = 1; i < arr.length; i++) {
    const a = arr[i - 1]
    const b = arr[i]
    miniAbsolute = Math.min(Math.abs(b - a), miniAbsolute)
  }
  // console.log(miniAbsolute)

  // get the difference of adjacent element
  for (let i = 1; i < arr.length; i++) {
    const a = arr[i - 1]
    const b = arr[i]
    if (b - a === miniAbsolute) {
      res.push([a, b])
    }
  }
  return res
}
