function unusedDigits(...args) {
  let nums = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, }
  args.forEach(num => {
    let number = num.toString().split('')
    number.forEach(i => nums[i]++)
  })
  let unused = ''
  for (num in nums) {
    if (nums[num] == 0) unused += num
  }
  return unused
}