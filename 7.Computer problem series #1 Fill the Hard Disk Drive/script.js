function save(sizes, hd) {
  let total = 0
  let count = 0
  for (let size of sizes) {
    total += size
    if (total <= hd) count++
    else break
  }
  return count
}