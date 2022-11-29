function getLargerNumbers(a, b) {
  return a.map((i, index) => i >= b[index] ? i : b[index])
}