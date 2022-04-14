function comp(array1, array2){
  if (array1 && array2) {
    let nums = {}
    let squared = {}
    let same = true
    array1.forEach(num => num in nums ? nums[num]++ : nums[num] = 1)
    array2.forEach(num => num in squared ? squared[num]++ : squared[num] = 1)
    for (key in nums) {
      if (!(key**2 in squared && nums[key] == squared[key**2])) same = false
    }
    for (key in squared) {
      if (!(Math.sqrt(key) in nums && squared[key] == nums[Math.sqrt(key)])) same = false
    }
    return same
  }
  else return false
}