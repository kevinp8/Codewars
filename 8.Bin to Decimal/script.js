function binToDec(bin){
  return bin.split('').reduce((init, bit, index) => bit=='1' ? init + 2**(bin.length-1-index) : init, 0)
}