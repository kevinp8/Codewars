function one(arr, fun){
  let bools = arr.map(i => fun(i))
  return bools.reduce((init, i)=> i === true ? init + 1: init,0) == 1
}