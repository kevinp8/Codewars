function oddOnesOut(nums) {
  const dict = {}
  nums.forEach(i => {
    if (dict[i]) dict[i]++
    else dict[i] = 1
  })
  return nums.filter(i => dict[i]%2 === 0)
}