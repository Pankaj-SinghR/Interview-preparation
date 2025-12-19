function permutation(processed, unprocessed) {
  if (unprocessed === "") {
    console.log(processed)
    return
  }

  const ch = unprocessed[0]
  const loopLen = processed.length + 1

  for (let i = 0; i < loopLen; i++) {
    permutation(addCharAtIndex(processed, i, ch), unprocessed.substring(1))
  }
}

function addCharAtIndex(processed, index, ch) {
  return processed.substring(0, index) + ch + processed.substring(index)
}

permutation("", "abc")

