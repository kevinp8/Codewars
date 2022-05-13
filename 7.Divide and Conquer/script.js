function divCon(x){
  let nums = 0
  let str = 0
  x.forEach(num => Number.isInteger(num) ? nums+=num : str+=Number(num))
  return nums - str
}