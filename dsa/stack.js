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

