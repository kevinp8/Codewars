var fibsFizzBuzz = function(n) {
    let arr = [1, 1]
    let nums = [1, 1]
    for (let i=2; i<n; i++) {
      let num = nums.slice(i-2, i).reduce((init, i) => init + i, 0)
      if (num % 3 === 0 && num % 5===0) arr.push('FizzBuzz')
      else if (num % 3 === 0) arr.push('Fizz')
      else if (num % 5 === 0) arr.push('Buzz')
      else arr.push(num)
      nums.push(num)
    }
    return arr.slice(0, n)
}