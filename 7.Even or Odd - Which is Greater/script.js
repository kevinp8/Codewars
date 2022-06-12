function evenOrOdd(str) {
  let nums =  str.split('').map(i => Number(i))
  let evens = nums.filter(i => i%2 == 0).reduce((init, i)=> init+i, 0)
  let odds = nums.filter(i => i%2 != 0).reduce((init, i)=> init+i, 0)
  return evens > odds ? 'Even is greater than Odd' : evens == odds ? 'Even and Odd are the same' : 'Odd is greater than Even'
}