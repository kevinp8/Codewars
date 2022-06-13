function reverseBits (n) {
  let revBin = n.toString(2).split('')
  let newNum = 0
  revBin.forEach((i, index) => {
    if (i==1) newNum += 2**index
  })
  return newNum
}