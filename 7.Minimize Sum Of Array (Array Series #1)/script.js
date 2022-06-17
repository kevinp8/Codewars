function minSum(arr) {
  let sum = 0
  arr.sort((a, b)=>a-b)
  while (arr.length>0) {
    sum += arr.pop() * arr.shift()
  }
  return sum
}