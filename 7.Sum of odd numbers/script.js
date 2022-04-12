function rowSumOddNumbers(n) {
    let triangle = {}
    let oddnum = -1
    for (let i=1; i<=n; i++) {
      triangle[i] = 0
      for (let j=0; j<i; j++) {
        oddnum += 2
        triangle[i] += oddnum
      }
    }
    return triangle[n]
  }