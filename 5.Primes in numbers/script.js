function primeFactors(n){
    let primes = {}
    let num = n
    for (let i=2; i<num; i++) {
      while (num % i === 0) {
        num = num/i
        if (i in primes) primes[i]++
        else primes[i] = 1
      }
    }
  if (num != 1) primes[num] = 1
  let str = ''
  for (let i in primes) {
    if (primes[i] > 1) str += `(${i}**${primes[i]})`
    else str += `(${i})`
  }
  return str
}