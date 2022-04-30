function dataReverse(data) {
  let bit = ''
  let bitArr = []
  data.forEach(i => {
    bit += i
    if (bit.length === 8) {
      bitArr.push(bit)
      bit = ''
    } 
  })
  return bitArr.reverse().join('').split('').map(i => parseInt(i))
}