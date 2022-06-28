function arithmeticSequenceElements(a,r,n) {
  let arr = []
  let num = a
  for (let i=0; i<n; i++) {
    arr.push(num)
    num+=r
  }
  return arr.join(', ')
}