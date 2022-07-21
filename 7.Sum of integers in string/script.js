function sumOfIntegersInString(s){
  let aNum = ''
  let nums = []
  s.split('').forEach((char, index) => {
    if (/[0-9]/.test(char)) {
      aNum += char
      if (!(/[0-9]/.test(s[index+1]))) {
        nums.push(Number(aNum))
        aNum = ''
      }
    }
  })
  return nums.reduce((init, i) => init + i,0)
}