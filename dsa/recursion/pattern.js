/** print this pattern
 *******
 *****
 ****
 ***
 **
 */

function pattern(r, c) {
  if (r === 0) {
    return;
  }
  if (c < r) {
    process.stdout.write("*")
    pattern(r, c + 1)
  } else {
    console.log()
    pattern(r - 1, 0)
  }
}

function traingle(r, c) {
  if (r === 0) {
    return;
  }

  if (c < r) {
    traingle(r, c + 1)
    process.stdout.write("*")
  } else {
    traingle(r - 1, 0)
    console.log()
  }
}

traingle(4, 0)

