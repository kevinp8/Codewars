function findSum(...args) {
  let num = 0
  for (let i of args) {
    if (i<0) return -1
    else num += i
  }
  return num
}