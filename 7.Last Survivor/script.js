function lastSurvivor(letters, coords) {
  let arr = letters.split('')
  coords.forEach(index => arr.splice(index, 1))
  return arr[0]
}