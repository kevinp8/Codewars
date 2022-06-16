function solve(arr){
    arr.sort((a,b) => a-b)
  let minmax = true
  let newArr = []
  while (arr.length>0) {
    if (minmax) {
      newArr.push(arr.pop())
      minmax = false
    } else {
      newArr.push(arr.shift())
      minmax = true
    }
  }
  return newArr
};