function sumDigPow(a, b) {
  let nums = []
  while (a<b) {
    let numStr = a.toString()
    let sum = 0
    for (let i=1; i<=numStr.length; i++) {
      sum += parseInt(numStr[i-1]) ** i
    }
    if (sum == a) nums.push(sum)
    a++
  }
  return nums
}