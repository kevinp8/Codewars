function arr2bin(arr){
  let sum = 0
  for (let i=0; i<arr.length; i++){
    if (Number.isInteger(arr[i])) sum += arr[i]
    else return false
  }
  return sum.toString(2)
}