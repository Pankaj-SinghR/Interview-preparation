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

