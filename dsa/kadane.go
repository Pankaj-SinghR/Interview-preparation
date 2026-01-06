func maxSubArray(nums []int) int {
    maxNum := int(math.Inf(-1))
    currSum := 0

    for i:= 0; i< len(nums); i++{
        currSum += nums[i]
        maxNum = max(maxNum, currSum)
        if currSum < 0 {
            currSum = 0
        }
    }
    return maxNum
}

