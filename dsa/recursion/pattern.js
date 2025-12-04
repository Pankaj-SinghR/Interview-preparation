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

pattern(4, 0)

