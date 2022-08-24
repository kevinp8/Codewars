function mixedFraction(s){
  let nums = s.split('/')
  if (nums[1] == 0) throw new Error("ZeroDivisionError")
  else if (Number(nums[0]) % Number(nums[1]) === 0 ) return (Number(nums[0]) / Number(nums[1])).toString()
  else {
    let negAns = false
    
    if (nums[0] < 0 && nums[1] < 0) {
      nums[0] *= -1
      nums[1] *= -1
    } else if (nums[0] < 0) {
      nums[0] *= -1
      negAns = true
    } else if (nums[1] < 0) {
      nums[1] *= -1
      negAns = true
    }
    
    let whole = Math.floor((Number(nums[0]) / Number(nums[1])))
    let numerator = Number(nums[0]) - (Number(nums[1]) * whole)
    let denom = Number(nums[1])
    
    
    for (let i=numerator; i>1; i--) {
      if (numerator % i === 0 && denom % i === 0) {
        numerator = numerator / i
        denom = denom / i
        break
      }
    }
    
    if (negAns && whole === 0) numerator*=-1
    else if (negAns) whole*=-1
    
    return whole !== 0 ? `${whole} ${numerator}/${denom}` : `${numerator}/${denom}`
  }
}