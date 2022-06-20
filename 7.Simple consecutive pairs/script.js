function pairs(ar){
  if (ar.length % 2 != 0) ar.pop()
  let pair = []
  let pairs = []
  ar.forEach(num => {
    pair.push(num)
    if (pair.length == 2) {
      pairs.push(pair)
      pair = []
    }
  })
  let count = 0
  pairs.forEach(e => Math.abs(e[0]-e[1]) == 1 ? count++ : null)
  return count
};