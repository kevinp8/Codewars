var isSquare = function(arr){
  return arr.length ? arr.every(i => Number.isInteger(Math.sqrt(i))) : undefined
}