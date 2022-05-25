function tidyNumber(n){
  let numSort = n.toString().split('').sort((a, b)=> a-b).join('')
  return Number(numSort) == n
}