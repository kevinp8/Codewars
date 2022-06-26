function isDivisible(...nums){
  let first = nums.shift()
  let div = true
  nums.forEach(i => first % i != 0 ? div = false : null)
  return div
}