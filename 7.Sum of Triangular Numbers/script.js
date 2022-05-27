function sumTriangularNumbers(n) {
  let num = 0
  let arr = []
  for (let i=1; i<=n; i++) {
    num += i
    arr.push(num)
  }
  return arr.reduce((init, num) => init+num, 0)
}