function findDifference(a, b) {
    let one = 1
    let two = 1
    for (const i of a) {
      one *= i
    }
    for (const i of b) {
      two *= i
    }
    return Math.abs(one-two)
  }