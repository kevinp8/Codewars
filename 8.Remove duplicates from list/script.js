function distinct(a) {
  let arr = []
  a.forEach(i => !arr.includes(i) ? arr.push(i) : i)
  return arr
}
