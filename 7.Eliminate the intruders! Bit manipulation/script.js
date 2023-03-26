function eliminateUnsetBits(number) {
  return number.split('').filter(i => i==='1').reduce((init, i, index) => init + 2**index, 0)
}