function reject(array, predicate) {
  return array.filter((i) => !predicate(i))
}