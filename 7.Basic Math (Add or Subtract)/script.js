function calculate(str) {
  let sum = 0
  let nums = str.split('plus')
  nums.forEach(i => {
    if (i.includes('minus')){
      let nums2 = i.split('minus')
      for (let j=0; j<nums2.length; j++){
        if (j===0) sum += Number(nums2[j])
        else sum -= Number(nums2[j])
      }
    } else sum += Number(i)
  })
  return sum.toString()
}