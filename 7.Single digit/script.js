function singleDigit(n) {
  if (n < 10) return n
  else {
    let num = n.toString(2).split('').reduce((init, i) => init+ +i, 0)
    return singleDigit(num)
  }
}