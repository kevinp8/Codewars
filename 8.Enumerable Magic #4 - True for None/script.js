function none(arr, fun){
  return arr.length == 0 ? true : arr.every(i => fun(i) == false)
}