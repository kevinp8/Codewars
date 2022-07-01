function uniqueSum(lst){
  let unique = []
  lst.forEach(i => unique.includes(i) ? null : unique.push(i))
  return lst.length > 0 ? unique.reduce((init, num) => init + num, 0) : null
}