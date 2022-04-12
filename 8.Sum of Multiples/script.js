function sumMul(n,m){
    let multiple = n
    let sum = 0
    while (m > multiple) {
      sum += multiple
      multiple += n
    }
    return m <= n ? 'INVALID' : sum
  }