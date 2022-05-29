
function howManySmaller(arr,n){
  let newArr = arr.map(i => i.toFixed(2))
  return newArr.reduce((init, i) => i<n ? init+1 : init, 0)
  
}
