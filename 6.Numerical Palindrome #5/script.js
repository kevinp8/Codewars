function palindrome(num) { 
  if (typeof num=='number' && num>= 0){
    let nums = {}
    num.toString().split('').forEach(i => {
      if (i in nums) nums[i]++
      else nums[i] = 1
    })
    let odds = 0
    for (key in nums) {
      if (nums[key]%2 != 0) odds++
    }
    return (odds == 1&&num.toString().length>1) || odds == 0
  } else {
    return 'Not valid'
  }
}