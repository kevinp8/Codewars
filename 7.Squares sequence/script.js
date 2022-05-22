function squares(x, n) {
  let arr = []
  let num = x
  for (let i=0; i<n; i++) {
    arr.push(num)
    num = num**2
  }
  return arr
}