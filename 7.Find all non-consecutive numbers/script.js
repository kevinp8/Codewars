function allNonConsecutive (arr) {
  let nums = []
  arr.forEach((i, index) => {
    if (i != arr[index-1]+1 && index!=0) {
      nums.push({i: index, n:i})
    }
  })
  return nums
}