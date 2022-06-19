function duplicates(array){
  let counts = {}
  array.forEach(num => num in counts ? counts[num]++ : counts[num] = 1)
  let pairs = 0
  for (let key in counts) {
    pairs += Math.floor(counts[key]/2)
  }
  return pairs
}