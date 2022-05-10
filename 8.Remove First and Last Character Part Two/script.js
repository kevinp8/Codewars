function array(arr){
  let nums = arr.split(',')
  nums.shift()
  nums.pop()
  return nums.length > 0 ? nums.join(' ') : null

}