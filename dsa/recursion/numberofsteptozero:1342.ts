function numberOfSteps(num: number): number {
  let step = 0
  return countSteps(num, step)
};

function countSteps(num: number, step: number): number {
  if (num <= 0) return step
  if (num % 2 === 0) {
    num = num / 2
  } else {
    num = num - 1
  }
  step++
  return countSteps(num, step)
}

