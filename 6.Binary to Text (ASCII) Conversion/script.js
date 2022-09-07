function binaryToString(binary) {
  let splitBin = binary.split('')
  let chars = []
  while (splitBin.length > 0) {
    chars.push(splitBin.splice(0,8))
  }
  chars = chars.map(aChar => {
    let unicode = 0
    let nums = {
      7: 1,
      6: 2,
      5: 4,
      4: 8,
      3: 16,
      2: 32,
      1: 64,
      0: 128
    }
    for (let i=0; i<aChar.length; i++){
      if (aChar[i] === '1') unicode += nums[i]
    }
    return String.fromCharCode(unicode)
  })
  return chars.join('')
}