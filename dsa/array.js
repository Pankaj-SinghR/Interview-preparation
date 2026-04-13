/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity
    let currSum = 0
    for(let i=0;i<nums.length;i++){
        currSum += nums[i]
        maxSum = Math.max(currSum, maxSum)
        if(currSum < 0) currSum = 0
    }
    return maxSum
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sArr = s.split('')
    let countMax = -Infinity
    let count = 0
    for(let i=0;i<sArr.length;i++){
        let set = new Set()
        for(let j=i;j<sArr.length;j++){
            const ele = sArr[j]
            if(set.has(ele)) break
            set.add(ele)
            count++
        }
        countMax = Math.max(countMax, count)
        count = 0
    }
    return countMax === -Infinity ? 0 : countMax
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity
    for(let i=0;i<nums.length;i++){
        let sum = 0
        for(let j=i;j<nums.length;j++){
            sum += nums[j]
            max = Math.max(max, sum)
        }
    }
    return max
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity
    for(let i=0;i<nums.length;i++){
        let sum = 0
        for(let j=i;j<nums.length;j++){
            sum += nums[j]
            max = Math.max(max, sum)
        }
    }
    return max
};

