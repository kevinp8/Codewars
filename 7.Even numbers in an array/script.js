function evenNumbers(array, number) {
  array.reverse()
  let arr = []
  array.forEach(i => i%2 === 0 && arr.length< number ? arr.push(i) : null)
  return arr.reverse()
}