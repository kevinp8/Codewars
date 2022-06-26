function mean(lst){
  let sum = 0
  let numOfNums = 0
  let word = ''
  lst.forEach(i => {
    if (/[0-9]/.test(i)) {
      sum += Number(i)
      numOfNums++
    } else word += i
      
  })
  return [sum/numOfNums, word]
}