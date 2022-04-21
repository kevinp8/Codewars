function incrementString (strng) {
  if (isNaN(strng.slice(-1))) {
    return strng + '1'
  } else {
    let nums = []
    let letters = []
    strng.split('').filter(i => {
      isNaN(i) ? letters.push(i) : nums.push(i)
    })
    let numLen = nums.length
    nums = (parseInt(nums.join(''))+1).toString().split('')
    while (nums.length < numLen) {
      nums.unshift('0')
    }
    return strng ? letters.join('')+nums.join('') : '1'
  }
}