/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let left = 0
  let right = nums.length - 1
  const res = []
  const square = (val) => Math.pow(val, 2)

  while (left <= right) {
    if (square(nums[left]) < square(nums[right])) {
      res.unshift(square(nums[right]))
      right--
    } else {
      res.unshift(square(nums[left]))
      left++
    }
  }

  return res
};

