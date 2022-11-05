function ArithmeticSequenceSum(a, r, n) {
  let sum = a
  let sumsum = a
  for (let i=0; i<n-1;i++) {
    sum += r
    sumsum += sum
  }
  return sumsum
}