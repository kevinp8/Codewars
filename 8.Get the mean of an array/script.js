function getAverage(marks){
  return Math.floor(marks.reduce((init, i) => init+i)/marks.length)
}