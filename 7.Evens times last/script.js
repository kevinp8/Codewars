function evenLast(numbers) {
  return numbers.length>0 ? numbers.filter((i, index) => index%2 == 0).reduce((init, num)=> init+num,0) * numbers[numbers.length-1] : 0
}