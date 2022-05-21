function differenceOfSquares(n){
  let squareSum = 0
  let sumSquare = 0
  for (let i=1; i<=n; i++) {
    squareSum += i
    sumSquare += i**2
  }
  return squareSum**2 - sumSquare
}