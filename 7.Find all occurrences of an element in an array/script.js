const findAll = (array, n) => {
  let arr = []
  array.forEach((i, index) => i === n ? arr.push(index) : null)
  return arr
}