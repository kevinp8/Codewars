function sumOfDifferences(arr) {
  arr.sort((a, b) => b-a)
  return arr.reduce((init, num, index) => index != arr.length-1 ? init + (num - arr[index+1]) : init,0)
}