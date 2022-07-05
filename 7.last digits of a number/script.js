function lastDigit(n, d) {
  let num = n.toString().split('').map(i => Number(i))
  if (d > n.toString().length) return num
  else if (d <= 0) return []
  else {
    return num.slice(n.toString().length-d)
  }
}