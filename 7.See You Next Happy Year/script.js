function nextHappyYear(year){
  let unique = false
  let nYear = year
  while (unique === false) {
    nYear++
    let ye = nYear.toString().split('')
    if (ye.every(i => ye.indexOf(i) === ye.lastIndexOf(i))) {
      unique = true
    }
  }
  return nYear
}