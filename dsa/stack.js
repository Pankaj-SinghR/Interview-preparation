/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let sArr = s.split("")
    // sArr only has 1 element, no other pair possible
    const openBracket = ["(", "[", "{"]
    const closeBracket = [")", "]", "}"]
    let stack = []

    for (const val of sArr) {
        if (closeBracket.includes(val)) {
            if(!stack.length) return false
            let popedElement = stack.pop()
            switch (popedElement) {
                case "(": if (val !== ")") return false
                    break
                case "{": if (val !== "}") return false
                    break
                case "[": if (val !== "]") return false
                    break
            }
        } else {
            stack.push(val)
        }
    }

    return stack.length ? false:true
};

// ---------------------------------------------------------------------------------- // 

var MinStack = function() {
    this.mainStack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.mainStack.push(val)
    // check if minStack is already empty
    if(!this.minStack.length){
        this.minStack.push(val)
    } else if(val <= this.minStack[this.minStack.length-1] && this.minStack.length){
    // if val < top of minStack then only push it
        this.minStack.push(val)
        // console.log(this.minStack)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const ele = this.mainStack.pop()
    if(ele === this.minStack[this.minStack.length-1]){
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.mainStack[this.mainStack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// ---------------------------------------------------------------------------

var MinStack = function () {
    this.mainStack = []
    this.minVal = null
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (!this.mainStack.length) {
        this.mainStack.push(val)
        this.minVal = val
    } else if (val <= this.minVal) {
        // v' = 2*v - minVal
        let newVal = 2 * val - this.minVal
        this.minVal = val
        this.mainStack.push(newVal)
    } else {
        this.mainStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (!!this.mainStack.length) {
        let popEle = this.mainStack.pop()
        if (popEle <= this.minVal) {
            this.minVal = 2 * this.minVal - popEle
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (!!this.mainStack.length) {
        if(this.mainStack[this.mainStack.length-1] < this.minVal) return this.minVal
        return this.mainStack[this.mainStack.length-1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minVal
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // find the greater element, using monotonic stack
    let stack = new Array()
    let ans = new Array(nums2.length).fill(-1)

    for (let i = nums2.length - 1; i >= 0; i--) {
        let ele = nums2[i]
        while (stack.length > 0 && nums2[stack[stack.length - 1]] <= ele) {
            stack.pop()
        }
        // if stack is non empty
        if (!!stack.length) {
            ans[i] = nums2[stack[stack.length - 1]]
        }
        stack.push(i)
    }

    // map the solution
    // console.log(ans)
    let solu = new Array(nums1.length)
    for (let i = 0; i < nums1.length; i++) {
        for(let j=0; j<nums2.length;j++){
            if(nums1[i] === nums2[j]){
                solu[i] = ans[j]
            }
        }
    }
    return solu
};

