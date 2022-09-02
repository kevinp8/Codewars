function sumFromString(str){
  let nums = str.match(/\d+/g)
  return nums ? str.match(/\d+/g).reduce((init, num) => init+ Number(num),0) : 0
}