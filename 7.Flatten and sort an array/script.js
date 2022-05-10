function flattenAndSort(array) {
  let arr = []
  for (let i of array) {
    for (let j of i) {
      arr.push(j)
    }
  }
  return arr.sort((a, b) => a-b);
}