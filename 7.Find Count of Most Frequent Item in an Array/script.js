function mostFrequentItemCount(collection) {
  let count = {}
  let counts = 0
  collection.forEach(i => {
    if (i in count) count[i]++
    else count[i] = 1
  })
  for (let key in count) {
    if (count[key] > counts) counts = count[key]
  }
  return counts
}