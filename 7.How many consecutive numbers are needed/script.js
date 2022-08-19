function consecutive(arr) {
  let nums = []
  for (let i=Math.min(...arr); i<=Math.max(...arr); i++) {
    nums.push(i)
  }
  return nums.length - arr.length
}