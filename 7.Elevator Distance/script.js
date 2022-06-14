function elevatorDistance(array) {
  let floors = 0
  array.forEach( (i, index) => index != 0 ? floors += Math.abs(i - array[index-1]) : null )
  return floors
}