function findUniq(arr) {
  return arr.find(i => arr.indexOf(i)==arr.lastIndexOf(i))
}