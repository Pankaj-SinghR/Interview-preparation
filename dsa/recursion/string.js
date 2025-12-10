
function skip(str, val) {
  let ans = ""
  ans = skipHelperFun(str, i = 0, val, ans)
  return ans
}

function skipHelperFun(str, i, val, ans) {
  if (str.length === i + 1) return ans
  if (str[i] !== val) ans += str[i]
  return skipHelperFun(str, i + 1, val, ans)
}

// const res = skip("bbaaccdd", "a")
// console.log(res)

// subset
// * Permutation and combination
// * subsets -> Non-adjacent collection
// the pattern of take some element and removing some, is called subset pattern (very important NOTE: )

function subseq(p, up) {
}

