function noBoringZeros(n) {
  n = n.toString().split('')
  if (n.length === 1) return Number(n)
  else {
    while (n[n.length-1] === '0') {
      n.pop()
    }
    return Number(n.join(''))
  }
}