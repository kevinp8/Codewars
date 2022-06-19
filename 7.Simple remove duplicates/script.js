function solve(arr) {
  arr.reverse()
  let newArr = []
  arr.forEach(i => !newArr.includes(i) ? newArr.push(i) : null)
  return newArr.reverse()
}