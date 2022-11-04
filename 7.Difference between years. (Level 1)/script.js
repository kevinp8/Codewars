var howManyYears = function(date1, date2){
  return Math.abs(Number(date1.slice(0, 4)) - Number(date2.slice(0, 4)))
}