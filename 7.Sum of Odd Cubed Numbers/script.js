function cubeOdd(arr) {
  if (arr.every(i => Number.isInteger(i))) return arr.reduce((init, num)=> num%2 !== 0 ? init + num**3: init, 0)
  else return undefined
}
