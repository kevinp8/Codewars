function mergeArrays(a, b) {
  let newArr = []
  while (a.length > 0 || b.length>0) {
    if (a.length > 0) newArr.push(a.shift())
    if (b.length > 0) newArr.push(b.shift())
  }
  return newArr
}