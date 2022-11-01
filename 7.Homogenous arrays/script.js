function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  return arrays.filter(i => i.length > 0 && i.every(j => typeof j === typeof i[0]))
}