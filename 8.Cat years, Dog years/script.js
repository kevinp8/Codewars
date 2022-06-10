var humanYearsCatYearsDogYears = function(humanYears) {
  let year = [0, 0, 0]
  for (let i=1; i<=humanYears; i++) {
    year[0]++
    
    if (i == 1) {
      year[1] += 15
      year[2] += 15
    }  else if (i == 2) {
      year[1] += 9
      year[2] += 9
    } else {
      year[1] += 4
      year[2] += 5
    }
  }
  return year;
}
