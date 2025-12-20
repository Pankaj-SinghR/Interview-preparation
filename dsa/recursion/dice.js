function dice(pp, target) {
  if (!target) {
    console.log(pp)
    return
  }

  for (let i = 1; i <= 6 && i <= target; i++) {
    dice(pp + i, target - i)
  }
}

dice("", 4)

