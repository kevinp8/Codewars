function all( arr, fun ){
  return arr.every(num => fun(num) === true)
}