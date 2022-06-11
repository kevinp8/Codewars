function letterCount(s){
  let counts = {}
  s.split('').forEach(i => {
    if (i in counts) counts[i]++
    else {
      counts[i] = 1
    }
  })
  return counts
}