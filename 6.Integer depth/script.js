function computeDepth (x){
  let tracker = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let multiple = 1
  while(tracker.length){
    let nums = (x*multiple).toString()
    for (let i=0; i<nums.length; i++) {
      if (tracker.includes(nums[i])) tracker.splice(tracker.indexOf(nums[i]), 1)
    }
    multiple++
  }
  return multiple-1
}