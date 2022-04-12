function between(a, b) {
    let nums = [a]
    let min = a
    while (b > min) {
      min++
      nums.push(min)
    }
    return nums
  }