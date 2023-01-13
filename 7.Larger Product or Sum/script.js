function sumOrProduct(array, n) {
  array.sort((a, b) => a-b)
  let prod = array.slice(0, n).reduce((init, i) => init * i, 1)
  let sum = array.slice(array.length-n).reduce((init, i) => init + i, 0)
  return prod > sum ? 'product' : prod < sum ? 'sum' : 'same'
}