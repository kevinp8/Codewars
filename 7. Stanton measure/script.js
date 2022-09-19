/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/
function stantonMeasure(arr) {
  return  arr.filter(j => j === arr.filter(i => i === 1).length).length
}