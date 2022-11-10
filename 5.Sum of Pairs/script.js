function sumPairs(ints, s) {
  let prev = {}
  for (let i=0; i<ints.length; i++) {
    if (s-ints[i] in prev) return [s-ints[i], ints[i]]
    else prev[ints[i]] = i
  }
  return undefined
}
  