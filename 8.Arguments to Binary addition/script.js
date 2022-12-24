function arr2bin(arr){
  return arr.reduce((init, i) => typeof i === 'number' ? init+i : init+0,0).toString(2)
}