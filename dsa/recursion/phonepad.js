function pad(processed, unprocessed) {
  let res = []

  if (!unprocessed.length) {
    res.push(processed)
    // console.log(processed)
    return res
  }
  const digit = parseInt(unprocessed[0])

  for (let i = (digit - 1) * 3; i < digit * 3; i++) {
    const ch = String.fromCharCode("a".charCodeAt(0) + i)
    res = [...res, ...pad(processed + ch, unprocessed.substring(1))]
  }

  return res
}

const res = pad("", "23")
console.log(res)

