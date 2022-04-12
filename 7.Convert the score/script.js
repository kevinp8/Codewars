function scoreboard(string) {
    let nums = {
      nil: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    }
    let arr = []
    for (const i of string.split(' ')) {
      if (i in nums) {
        arr.push(nums[i])
      }
    }
    return arr
  }