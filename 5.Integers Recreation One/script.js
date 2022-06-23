function listSquared(m, n) {
  let pairs = []
  for (let num=m; num<=n; num++){
    let divisors = []
    for (let divisor=1; divisor<=Math.ceil(num/2); divisor++){
      if (num%divisor == 0) divisors.push(divisor)
    }
    !divisors.includes(num) ? divisors.push(num) : null
    let squaredSum = divisors.reduce((init, i)=> init + (i**2),0)
    let sqRoot = Math.sqrt(squaredSum)
    if (Number.isInteger(sqRoot)) pairs.push([num, squaredSum])
  }
  return pairs
}
