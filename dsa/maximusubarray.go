func maxSubArray(nums []int) int {
    maxNum := int(math.Inf(-1))

    for start :=0; start<len(nums); start++{
        sum := 0
        for end := start; end<len(nums); end++{
            sum += nums[end]
            maxNum = max(sum, maxNum)
        }
    }

    return maxNum 
}

