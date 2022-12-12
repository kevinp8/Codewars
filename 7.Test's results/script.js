function testResult(array) {
  let grades = {
    'h': 0,
    'a': 0,
    'l': 0
  }
  let avg = 0
  for (let i=0; i<array.length; i++){
    avg += array[i]
    if (array[i] > 8) grades['h']++
    else if (array[i] > 6) grades['a']++
    else grades['l']++
  }
  if (grades['h'] === array.length) return [Number((avg/array.length).toFixed(3)), grades, 'They did well']
  else return [Number((avg/array.length).toFixed(3)), grades]
}