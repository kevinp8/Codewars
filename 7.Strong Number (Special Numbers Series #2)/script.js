function strong(n) {
  let nums = n.toString().split('').map(i => Number(i))
  let sum = 0
  nums.forEach(num => {
    let factorial = 1
    for (let i=1; i<=num; i++) {
      factorial *= i
    }
    sum += factorial
  })
  return sum == n ? 'STRONG!!!!' : 'Not Strong !!'
}