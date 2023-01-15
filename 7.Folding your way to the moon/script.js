function foldTo(distance) {
  if (distance < 0) return null
  let thin = 0.0001
  let fols = 0
  while (thin < distance) {
    thin *= 2
    fols++
  }
  return fols
  
}