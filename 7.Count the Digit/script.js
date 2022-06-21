function nbDig(n, d) {
  let count = 0
  for (let i=0; i<=n; i++) {
    let num = (i**2).toString()
    if (num.includes(d.toString())) {
      num.split('').forEach(digit => {
      if (digit == d) count++
    })
    }
    
  }
  return count
}