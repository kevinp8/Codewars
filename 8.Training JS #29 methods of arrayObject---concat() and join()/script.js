function bigToSmall(arr){
  return arr.join(',').split(',').sort((a, b) => b-a).join('>')
  
}